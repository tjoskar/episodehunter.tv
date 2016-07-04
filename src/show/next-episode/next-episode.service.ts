import { Injectable } from '@angular/core';
import { HttpService } from '../../lib/http';
import { LocalStorage } from '../../lib/storage';
import { Observable } from 'rxjs';

@Injectable()
class NextEpisodeService {
    http: HttpService;
    storage: LocalStorage;

    constructor(http: HttpService, storage: LocalStorage) {
        this.http = http;
        this.storage = storage;
    }

    getNextEpisode(showId) {
        const url = `show/${showId}/next_episode`;
        const name = `next-episode-${showId}`;
        return Observable.of(this.storage.get(name))
            .filter(d => d && d.data)
            .concat(
                // TODO: Fix this any
                this.http.get<any>(url)
                    .map(n => n.episode)
                    .map(n => {
                        this.storage.save(name, n);
                        return n;
                    })
            );
    }
}

export { NextEpisodeService };
