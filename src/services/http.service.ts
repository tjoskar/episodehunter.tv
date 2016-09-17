import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { config } from '../lib/config';
import { AuthService } from './auth.service';

@Injectable()
export class HttpService {
    http: Http;
    authService: AuthService;

    constructor(http: Http, authService: AuthService) {
        this.http = http;
        this.authService = authService;
    }

    get<T>(url, initHeaders = {}): Observable<T> {
        const headers = this.createHeaders(initHeaders);
        return this.http
            .get(this.generateUrl(url), { headers })
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

    generateUrl(url: string) {
        if (url[0] === '/') {
            return config.baseApiUrl + url;
        } else {
            return url;
        }
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
