import { Injectable } from '@angular/core';
import { HttpService } from '../lib/http';
import { Serach } from '../contracts/server';

@Injectable()
export class SearchService {
    http: HttpService;

    constructor(http: HttpService) {
        this.http = http;
    }

    search(term: string) {
        const url = `/search/${term}`;
        return this.http
            .get<Serach>(url)
            .map(data => data.result);
    }

}
