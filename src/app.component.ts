import {Component} from 'angular2/core';
import UpcomingComponent from './upcomming/upcoming.component';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'episodehunter',
    templateUrl: 'src/base-template.html',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/upcoming', name: 'UpcomingShows', component: UpcomingComponent, useAsDefault: true}
])
class AppComponent { }

export {AppComponent};
