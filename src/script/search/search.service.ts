import {Injectable} from '@angular/core';
import {HttpService} from '../lib/http';

@Injectable()
class SearchService {
    http: HttpService;

    constructor(http: HttpService) {
        this.http = http;
    }

    search(term: string) {
        const url = `/search/${term}`;
        return this.http
            .get(url)
            .map(data => data.result);
    }

}

export {SearchService};
export default SearchService;
