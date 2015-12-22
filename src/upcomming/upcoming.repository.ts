import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import {Observable} from 'rxjs/Rx';

const token = '';

@Injectable()
class UpcomingRepository {
    http: Http;

    constructor(http: Http) {
        this.http = http;
    }

    get() {
        return this.http.get('http://localhost:8000/user/upcoming/episodes', {
            headers: new Headers({'Authorization': token})
        })
        .catch(error => {
            console.error(error);
            return Observable.throw(error);
        })
        .map(res => res.json())
        .map(upcoming => upcoming.episodes);
    }

    hej() {
        console.log('Hej');
    }

}


export default UpcomingRepository;
