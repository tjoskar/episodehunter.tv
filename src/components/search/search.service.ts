import { Injectable } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Search } from '../../contracts/server';

@Injectable()
export class SearchService {
    http: HttpService;

    constructor(http: HttpService) {
        this.http = http;
    }

    search(term: string) {
        const url = `/search/${term}`;
        return this.http
            .get<Search>(url)
            .map(data => data.result);
    }

}
