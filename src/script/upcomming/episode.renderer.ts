import {Component, Input} from 'angular2/core';
import utility from '../lib/utility';
import {LazyLoadImage} from '../lib/lazy-load-image';

@Component({
    selector: 'episode-renderer',
    directives: [LazyLoadImage],
    template: `
    <a href="{{showLink}}">
        <div class="poster">
            <hgroup class="date" *ngIf="hasAirDate()" >
                <p class="day">{{day}}</p>
                <p class="month">{{month}}</p>
                <p class="year">{{year}}</p>
            </hgroup>
            <hgroup class="title">
                <p>{{episode.show.title}}</p>
            </hgroup>
            <hgroup class="episode-data" style="display: none;">
                <p>Sunday</p>
                <p>S05E12</p>
            </hgroup>
            <img alt="" [defaultImg]="'http://img.episodehunter.tv/serie/poster/1363113862.png'" [lazyLoad]="showPoster" [offset]="500" style="display: inline;" width="185">
        </div>
    </a>`
})
class EpisodeRenderer {
    @Input() episode;
    day;
    month;
    year;
    showLink;
    showPoster;

    hasAirDate() {
        return this.episode.airs instanceof Date;
    }

    ngAfterContentInit() {
        const urlFrendlyShowName = utility.urlTitle(this.episode.show.title);
        this.showLink = `http://episodehunter.tv/shows/${this.episode.show.ids.id}/${urlFrendlyShowName}`;
        this.showPoster = `http://img.episodehunter.tv/serie/poster/${this.episode.show.poster}`;

        if (this.hasAirDate()) {
            this.day = utility.time.padDateWithZero(this.episode.airs.getDate());
            this.month = utility.time.shortMonth(this.episode.airs);
            this.year = this.episode.airs.getFullYear();
        }
    }

}

export default EpisodeRenderer;
