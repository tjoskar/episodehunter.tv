import {Component} from 'angular2/core';
import {RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'eh-popular-shows',
    templateUrl: 'script/popular/template/popular-shows.html',
    directives: [ROUTER_DIRECTIVES]
})
class PopularShowComponet {
    since;

    constructor(params: RouteParams) {
        this.since = params.get('since');
        console.log('Popular shows', this.since);
    }

    routerCanReuse() {
        return true;
    }

    routerOnReuse(nextInstruction) {
        this.since = nextInstruction.params.since;
        console.log(this.since);
    }

}

export default PopularShowComponet;
export {PopularShowComponet};
