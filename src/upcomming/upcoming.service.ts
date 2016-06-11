import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import Http from '../lib/http';
import LocalStorage from '../lib/storage';
import utility from '../lib/utility';

@Injectable()
class UpcomingService {
    http: Http;
    storage: LocalStorage;

    constructor(http: Http, storage: LocalStorage) {
        this.http = http;
        this.storage = storage;
    }

    fetchFromServer() {
        const url = '/user/upcoming/episodes';
        return this.http
            .get(url)
            .map(upcoming => upcoming.episodes)
            .map(episodes => this.groupeEpisodes(episodes))
            .map(episodes => {
                this.storage.save('upcoming', episodes, 43200000);
                return episodes;
            });
    }

    get() {
        const showsFromStorage = this.storage.get('upcoming');
        if (showsFromStorage && showsFromStorage.data) {
            const cacheObservable = Observable.of(showsFromStorage.data);
            if (showsFromStorage.obsolete) {
                return cacheObservable.concat(this.fetchFromServer());
            } else {
                return cacheObservable;
            }
        } else {
            return this.fetchFromServer();
        }
    }

    groupeEpisodes(upcomingEpisodes) {
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
            episode.airs = episode.airs ? new Date(episode.airs) : -1;
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


export default UpcomingService;
