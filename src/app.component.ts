import {Component} from 'angular2/core';
import UpcomingComponent from './upcomming/upcoming.component';
import {RouteConfig, RouterOutlet} from 'angular2/router';

@Component({
    selector: 'episodehunter',
    templateUrl: 'src/base-template.html',
    directives: [RouterOutlet]
})
@RouteConfig([
    {path: '/upcoming', name: 'UpcomingShows', component: UpcomingComponent, useAsDefault: true}
])
class AppComponent { }

export {AppComponent};
