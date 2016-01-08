import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import PopularShowComponet from './popular-show.component';

@Component({
    selector: 'eh-popular',
    template: '<router-outlet></router-outlet>',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: 'shows/:since', name: 'PopularShows', component: PopularShowComponet, useAsDefault: true}
])
class PopularComponent {

    constructor() {
        console.log('PopularComponent');
    }

}

export {PopularComponent};
export default PopularComponent;
