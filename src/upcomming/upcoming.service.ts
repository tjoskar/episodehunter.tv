import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { UpcomingShows, UpcomingEpisode, ApplicationModel } from '../model';
import { actions } from './upcomming.reducer';
import { HttpService } from '../lib/http';
import utility from '../lib/utility';

@Injectable()
export class UpcomingService {
    http: HttpService;
    store: Store<ApplicationModel>;

    constructor(http: HttpService, store: Store<ApplicationModel>) {
        this.http = http;
        this.store = store;
    }

    updateModel() {
        const url = '/user/upcoming/episodes';
        return this.http
            .get<{episodes: UpcomingEpisode[]}>(url)
            .map(upcoming => upcoming.episodes)
            .map(episodes => this.groupEpisodes(episodes))
            .do(episodes => this.store.dispatch({type: actions.UPDATE_UPCOMING_SHOWS, payload: episodes}));
    }

    groupEpisodes(upcomingEpisodes: UpcomingEpisode[]): UpcomingShows {
        const justAired = [];
        const thisWeek = [];
        const nextWeek = [];
        const upcoming = [];
        const tba = [];
        const justAiredTimestamp = utility.time.futureDate(-2);
        const nowTimestamp = utility.time.today();
        const thisWeekTimestamp = utility.time.nextSunday(nowTimestamp);
        const nextWeekTimestamp = utility.time.nextSunday(thisWeekTimestamp);

        upcomingEpisodes.forEach(episode => {
            episode.airs = episode.airs ? new Date(<string>episode.airs) : undefined;
            if (episode.airs <= justAiredTimestamp) {
                tba.push(episode);
            } else if (episode.airs <= nowTimestamp) {
                justAired.push(episode);
            } else if (episode.airs <= thisWeekTimestamp) {
                thisWeek.push(episode);
            } else if (episode.airs <= nextWeekTimestamp) {
                nextWeek.push(episode);
            } else {
                upcoming.push(episode);
            }
        });

        return {justAired, thisWeek, nextWeek, upcoming, tba};
    }

}
