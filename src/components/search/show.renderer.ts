import { Component, Input } from '@angular/core';
import utility from '../../lib/utility';

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
            <img src="http://img.episodehunter.tv/serie/poster/1363113862.png" alt="" [lazyLoad]="showPoster" [offset]="500">
            <div class="title">
                <p>{{showName}}</p>
            </div>
        </div>
    </a>`,
})
export class ShowRenderer {
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
