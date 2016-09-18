import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Seasons } from '../model';

@Injectable()
export class ShowService {
    http: HttpService;

    constructor(http: HttpService) {
        this.http = http;
    }

    fetchShow(showId: number) {
        throw new Error('NOT IMPLEMETED');
    }

    fetchEpisodes(showId: number) {
        const url = `/show/${showId}/episodes`;
        return this.http.get<{seasons: Seasons}>(url)
            .map(data => data.seasons);
    }

}
