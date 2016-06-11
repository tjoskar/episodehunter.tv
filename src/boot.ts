import '../style/index.scss';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { HTTP_PROVIDERS } from '@angular/http';
import { AppComponent } from './script/app.component';
import { HttpService } from './script/lib/http';
import AuthService from './script/authentication/auth.service';
import { LocalStorage } from './script/lib/storage';

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    HttpService,
    AuthService,
    LocalStorage
]);
