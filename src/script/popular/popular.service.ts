import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs';
import {HttpService} from '../lib/http';
import {LocalStorage} from '../lib/storage';
import utility from '../lib/utility';

@Injectable()
class PopularService {
    http: HttpService;
    storage: LocalStorage;
    showsUrl = '/popular/shows/';
    moviesUrl = '/popular/movies/';

    constructor(http: HttpService, storage: LocalStorage) {
        this.http = http;
        this.storage = storage;
    }

    getPopularShows(since: number): Observable<any> {
        const showsFromStorage = this.storage.get(`popular-shows-${since}`);
        if (showsFromStorage && showsFromStorage.data) {
            const cacheObservable = Observable.of(showsFromStorage.data);
            if (showsFromStorage.obsolete) {
                return cacheObservable.concat(this.fetchPopularShowsFromServer(since));
            } else {
                return cacheObservable;
            }
        } else {
            return this.fetchPopularShowsFromServer(since);
        }
    }

    fetchPopularShowsFromServer(since: number) {
        const fromDate = this.convertToDate(since);
        const url = `${this.showsUrl}${fromDate}`;
        return this.http
            .get(url)
            .map(data => data.shows)
            .map(shows => {
                this.storage.save(`popular-shows-${since}`, shows, 172800000);
                return shows;
            });
    }

    convertToDate(since: number): string {
        switch (since) {
            case 1:
                return utility.time.convertToDateString(utility.time.futureDate(-7));
            case 2:
                return utility.time.convertToDateString(utility.time.futureDate(-30));
            case 3:
                return utility.time.convertToDateString(utility.time.futureDate(-90));
            case 4:
                return utility.time.convertToDateString(utility.time.futureDate(-365));
            default:
                return '';
        }
    }
}

export default PopularService;
export {PopularService};
