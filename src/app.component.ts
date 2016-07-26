import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';
import { UpcomingComponent } from './upcomming/upcoming.component';
import PopularComponent from './popular/popular.component';
import SearchComponet from './search/search.component';
import ShowComponent from './show/show.component';
import { AppService } from './app.service';

@Component({
    selector: 'episodehunter',
    template: require('./base-template.html'),
    directives: [SearchComponet, ROUTER_DIRECTIVES],
    providers: [ AppService ]
})
@RouteConfig([
    {path: '/upcoming', name: 'UpcomingShows', component: UpcomingComponent, useAsDefault: true},
    {path: '/popular/...', name: 'Popular', component: PopularComponent},
    {path: '/show/:id', name: 'Show', component: ShowComponent}
])
class AppComponent {
    showSerachDialog = false;

    constructor(appService: AppService) {
        appService.syncCacheState();
    }

    toogleSeach() {
        this.showSerachDialog = !this.showSerachDialog;
    }

    closeSearchDialog() {
        this.showSerachDialog = false;
    }
}

export {AppComponent};
