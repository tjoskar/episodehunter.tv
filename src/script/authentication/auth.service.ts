import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import {LocalStorage} from '../lib/storage';

@Injectable()
class AuthService {
    http: Http;
    storage: LocalStorage;

    constructor(http: Http, storage: LocalStorage) {
        this.http = http;
        this.storage = storage;
    }

    createToken(username: string, password: string) {
        return this.http.post('http://localhost:8000/auth/create-token',
            JSON.stringify({username, password}),
            {
                headers: new Headers({'Content-Type': 'application/json'})
            }
        )
        .map(res => res.json())
        .map(res => res.token);
    }

    removeToken() {
        this.storage.remove('token');
    }

    getToken() {
        return this.storage.get('token');
    }

}

export default AuthService;
