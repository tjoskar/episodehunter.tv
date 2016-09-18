import { Injectable } from '@angular/core';
import { UpcomingShows, UpcomingEpisode } from '../model';
import { HttpService } from './http.service';
import utility from '../lib/utility';

@Injectable()
export class UpcomingService {
    http: HttpService;

    constructor(http: HttpService) {
        this.http = http;
    }

    getUpcomingEpisodes() {
        const url = '/user/upcoming/episodes';
        return this.http
            .get<{episodes: UpcomingEpisode[]}>(url)
            .map(upcoming => upcoming.episodes)
            .map(episodes => this.groupEpisodes(episodes));
    }

    groupEpisodes(upcomingEpisodes: UpcomingEpisode[]): UpcomingShows {
        const justAired = [];
        const thisWeek = [];
        const nextWeek = [];
        const upcoming = [];
        const tba = [];
        const nowTimestamp = utility.time.today();
        const thisWeekEndTimestamp = utility.time.nextSunday(nowTimestamp);
        const nextWeekEndTimestamp = utility.time.nextSunday(thisWeekEndTimestamp);

        /*
        | invalid |  infinit  | next week | this week | today | days in the past |
        |   tba   |  upcoming | next week | this week |      justAired           |
        */
        upcomingEpisodes.forEach(episode => {
            episode.airs = episode.airs ? new Date(<string>episode.airs) : undefined;
            if (!utility.time.isValidDate(episode.airs)) {
                tba.push(episode);
            } else if (episode.airs <= nowTimestamp) {
                justAired.push(episode);
            } else if (episode.airs <= thisWeekEndTimestamp) {
                thisWeek.push(episode);
            } else if (episode.airs <= nextWeekEndTimestamp) {
                nextWeek.push(episode);
            } else {
                upcoming.push(episode);
            }
        });

        return {justAired, thisWeek, nextWeek, upcoming, tba};
    }

}
