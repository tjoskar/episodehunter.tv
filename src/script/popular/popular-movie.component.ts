import {Component, EventEmitter} from '@angular/core';
import {RouteParams, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import PopularService from './popular.service';
import {MovieRenderer} from './movie.renderer';

@Component({
    selector: 'eh-popular-movies',
    templateUrl: 'script/popular/template/popular-movies.html',
    directives: [ROUTER_DIRECTIVES, MovieRenderer],
    providers: [PopularService]
})
class PopularMovieComponet {
    click = new EventEmitter<number>();
    popularMovies = [];
    since;

    constructor(params: RouteParams, service: PopularService) {
        this.click.map(since => {
                return service.getPopularMovies(since);
            })
            .mergeAll()
            .subscribe(
                movies => this.popularMovies = movies,
                error => console.error(error)
            );
        this.onClick(params.get('since') || 1);
    }

    onClick(since) {
        this.since = since;
        this.click.emit(since);
    }

}

export default PopularMovieComponet;
export {PopularMovieComponet};
