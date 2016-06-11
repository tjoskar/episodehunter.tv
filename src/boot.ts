import './style/index.scss';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { HTTP_PROVIDERS } from '@angular/http';
import { AppComponent } from './app.component';
import { HttpService } from './lib/http';
import AuthService from './authentication/auth.service';
import { LocalStorage } from './lib/storage';

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    HttpService,
    AuthService,
    LocalStorage
]);
