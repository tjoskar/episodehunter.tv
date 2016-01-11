import {Component, Input} from 'angular2/core';
import utility from '../lib/utility';
import {LazyLoadImage} from '../lib/lazy-load-image';

@Component({
    selector: 'show-renderer',
    styles: [`
        img {
            width: 185px;
            min-height: 185px;
        }
    `],
    template: `
    <a href="{{showLink}}">
        <div class="poster">
            <img alt="" [defaultImg]="'http://img.episodehunter.tv/serie/poster/1363113862.png'" [lazyLoad]="showPoster" [offset]="500">
            <hgroup class="title">
                <p>{{showName}}</p>
            </hgroup>
        </div>
    </a>`,
    directives: [LazyLoadImage]
})
class ShowRenderer {
    @Input() show;

    get showName() {
        return this.show.title;
    }

    get showLink() {
        // Todo: Fix this when we have a show page
        const urlFrendlyShowName = utility.urlTitle(this.show.title);
        return `http://episodehunter.tv/shows/${this.show.ids.id}/${urlFrendlyShowName}`;
    }

    get showPoster() {
        return `http://img.episodehunter.tv/serie/poster/${this.show.poster}`;
    }

}

export default ShowRenderer;
export {ShowRenderer};
