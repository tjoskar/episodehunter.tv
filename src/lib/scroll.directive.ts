import {Directive, Input} from '@angular/core';

@Directive({
    selector: '[scrollTo]',
    host: {
        '(click)': 'onClick()',
    }
})
class ScrollDirective {
    @Input('scrollTo') scrollTo;

    onClick() {
        if (this.scrollTo) {
            this.scrollTo.scrollIntoView();
        }
    }

}

export default ScrollDirective;
