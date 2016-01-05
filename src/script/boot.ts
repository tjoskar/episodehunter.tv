import '../style/index.scss';
import 'es6-shim';
import 'reflect-metadata';
import 'rxjs';
import 'zone.js/dist/zone-microtask';
import 'zone.js/dist/long-stack-trace-zone';
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {AppComponent} from './app.component';
import {HttpService} from './lib/http';
import AuthService from './authentication/auth.service';
import {LocalStorage} from './lib/storage';

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    HttpService,
    AuthService,
    LocalStorage
]);
