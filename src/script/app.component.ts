import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import UpcomingComponent from './upcomming/upcoming.component';
import PopularComponent from './popular/popular.component';
import SearchComponet from './search/search.component';

@Component({
    selector: 'episodehunter',
    templateUrl: 'script/base-template.html',
    directives: [SearchComponet, ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/upcoming', name: 'UpcomingShows', component: UpcomingComponent, useAsDefault: true},
    {path: '/popular/...', name: 'Popular', component: PopularComponent}
])
class AppComponent {
    showSerachDialog = false;

    toogleSeach() {
        this.showSerachDialog = !this.showSerachDialog;
    }

    closeSearchDialog() {
        this.showSerachDialog = false;
    }
}

export {AppComponent};
