import 'rxjs/add/operator/map';
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {AppComponent} from './app.component';
import UpcomingRepository from './upcomming/upcoming.repository';
import UpcomingService from './upcomming/upcoming.service';

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    UpcomingRepository,
    UpcomingService
]);
