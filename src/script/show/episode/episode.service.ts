import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs';
import {HttpService} from '../../lib/http';
import {LocalStorage} from '../../lib/storage';

@Injectable()
class EpisodeService {
    http: HttpService;
    storage: LocalStorage;

    constructor(http: HttpService, storage: LocalStorage) {
        this.http = http;
        this.storage = storage;
    }

    getEpisodes(showId: number) {
        const episodesFromStorage = this.storage.get(`episodes-${showId}`);
        if (episodesFromStorage && episodesFromStorage.data) {
            return Observable.of(episodesFromStorage.data)
                .concat(this.fetchEpisodesFromServer(showId));
        } else {
            return this.fetchEpisodesFromServer(showId);
        }
    }

    fetchEpisodesFromServer(showId: number) {
        const url = `/show/${showId}/episodes`;
        return this.http.get(url).map(episodes => {
            this.storage.save(`episodes-${showId}`, episodes.seasons, 0);
            return episodes.seasons;
        });
    }

    markEpisodeAsWatched(episodeId) {
        return Observable.of(episodeId);
    }

    markEpisodeAsUnwatched(episodeId) {
        return Observable.of(episodeId);
    }
}

export {EpisodeService};
export default EpisodeService;
