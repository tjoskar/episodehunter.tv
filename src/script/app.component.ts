import {Component} from 'angular2/core';
import UpcomingComponent from './upcomming/upcoming.component';
import PopularComponent from './popular/popular.component';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'episodehunter',
    templateUrl: 'script/base-template.html',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/upcoming', name: 'UpcomingShows', component: UpcomingComponent, useAsDefault: true},
    {path: '/popular/...', name: 'Popular', component: PopularComponent}
])
class AppComponent { }

export {AppComponent};
