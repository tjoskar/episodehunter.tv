import {Component, EventEmitter} from '@angular/core';
import {RouteParams, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import PopularService from './popular.service';
import {ShowRenderer} from './show.renderer';

@Component({
    selector: 'eh-popular-shows',
    templateUrl: require('./template/popular-shows.html'),
    directives: [ROUTER_DIRECTIVES, ShowRenderer],
    providers: [PopularService]
})
class PopularShowComponet {
    click = new EventEmitter<number>();
    popularShows = [];
    since;

    constructor(params: RouteParams, service: PopularService) {
        this.click.map(since => {
                return service.getPopularShows(since);
            })
            .mergeAll()
            .subscribe(
                shows => this.popularShows = shows,
                error => console.error(error)
            );
        this.onClick(params.get('since') || 1);
    }

    onClick(since) {
        this.since = since;
        this.click.emit(since);
    }

}

export default PopularShowComponet;
export {PopularShowComponet};
