import {Directive, Input} from 'angular2/core';
import {Router} from 'angular2/router';

@Directive({
    selector: '[routeAndScroll]',
    host: {
        '(click)': 'onClick()',
    }
})
class RouteAndScrollDirective {
    @Input('routeAndScroll') route;
    @Input('view') viewRef;
    router: Router

    constructor(router: Router) {
        this.router = router;
    }

    onClick() {
        if (this.route) {
            this.router.navigate(this.route);
        }
        if (this.viewRef) {
            this.viewRef.scrollIntoView();
        }
    }

}

export default RouteAndScrollDirective;
