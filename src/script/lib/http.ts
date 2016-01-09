import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import {Observable} from 'rxjs';
import AuthService from '../authentication/auth.service';

@Injectable()
class HttpService {
    http: Http;
    authService: AuthService;

    constructor(http: Http, authService: AuthService) {
        this.http = http;
        this.authService = authService;
    }

    get(url, initHeaders = {}) {
        const headers = this.createHeaders(initHeaders);
        return this.http
            .get(url, { headers })
            .map(res => res.json())
            .catch(error => this.catchError(error));
    }

    catchError(error) {
        if (error && error.status === 401) {
            this.authService.removeToken();
            this.redirectUserToLogin();
        } else if (error && error._body) {
            const err = JSON.parse(error._body);
            if (err && err.message) {
                return Observable.throw(err.message);
            }
        }
        return Observable.throw(error);
    }

    redirectUserToLogin() {
        window.location.href = '/register.html';
    }

    createHeaders(initHeaders) {
        const token = this.getToken();
        const headers = new Headers(initHeaders);
        headers.append('Authorization', token);
        headers.append('Content-Type', 'application/json');
        return headers;
    }

    getToken() {
        const token = this.authService.getToken();
        if (!token || !token.data) {
            window.location.href = '/register.html';
        } else {
            return token.data;
        }
    }

}

export default HttpService;
export {HttpService};
