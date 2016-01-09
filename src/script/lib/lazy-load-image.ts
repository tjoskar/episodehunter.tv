import {Directive, ElementRef, Renderer, Input} from 'angular2/core';
import {Observable, Subscription} from 'rxjs';

@Directive({
    selector: '[lazyLoad]'
})
class LazyLoadImage {
    @Input('lazyLoad') src;
    @Input() defaultImg;
    @Input() offset;
    scrollSubscription: Subscription<Event>;
    viewportSize = {
        height: 0,
        width: 0
    };
    elementRef: ElementRef;

    constructor(el: ElementRef, renderer: Renderer) {
        this.elementRef = el;
    }

    ngAfterContentInit() {
        this.updateViewportOffset();
        if (this.isVisible()) {
            this.setImage();
            return;
        }
        this.elementRef.nativeElement.src = this.defaultImg || '';

        this.scrollSubscription = Observable
            .fromEvent(window, 'scroll')
            .debounceTime(100)
            .filter(() => this.isVisible())
            .map(() => {
                this.setImage();
                this.ngOnDestroy();
            })
            .subscribe();
    }

    setImage() {
        this.elementRef.nativeElement.src = this.src;
    }

    isVisible() {
        const rect = this.elementRef.nativeElement.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            (rect.bottom - rect.height) <= this.viewportSize.height &&
            (rect.right - rect.width) <= this.viewportSize.width
        );
    }

    updateViewportOffset() {
        this.viewportSize.height = (window.innerHeight || document.documentElement.clientHeight) + (this.offset || 0);
        this.viewportSize.width = (window.innerWidth || document.documentElement.clientWidth) + (this.offset || 0);
    }

    ngOnDestroy() {
        if (this.scrollSubscription && !this.scrollSubscription.isUnsubscribed) {
            this.scrollSubscription.unsubscribe();
        }
    }
}

export {LazyLoadImage};
export default LazyLoadImage;
