import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs';
import Http from '../lib/http';

const token = '';

@Injectable()
class UpcomingRepository {
    http: Http;

    constructor(http: Http) {
        this.http = http;
    }

    get() {
        return this.http
            .get('http://localhost:8000/user/upcoming/episodes')
            .map(upcoming => upcoming.episodes);
    }

}


export default UpcomingRepository;
