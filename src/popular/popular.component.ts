import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import PopularShowComponet from './popular-show.component';
import PopularMovieComponet from './popular-movie.component';

@Component({
    selector: 'eh-popular',
    template: '<router-outlet></router-outlet>',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: 'shows/:since', name: 'PopularShows', component: PopularShowComponet, useAsDefault: true},
    {path: 'movies/:since', name: 'PopularMovies', component: PopularMovieComponet}
])
class PopularComponent {}

export {PopularComponent};
export default PopularComponent;
