import {Component, Input} from 'angular2/core';
import utility from '../lib/utility';

@Component({
    selector: 'episode-renderer',
    template: `
    <a href="{{showLink}}">
        <div class="poster">
            <hgroup class="date" *ngIf="hasAirDate()" >
                <p class="day">{{day}}</p>
                <p class="month">{{month}}</p>
                <p class="year">{{year}}</p>
            </hgroup>
            <hgroup class="show-name">
                <p>{{episode.show.title}}</p>
            </hgroup>
            <hgroup class="episode-data" style="display: none;">
                <p>Sunday</p>
                <p>S05E12</p>
            </hgroup>
            <img src="{{showPoster}}" alt="" width="185" style="display: inline;">
        </div>
    </a>`
})
class EpisodeRenderer {
    @Input() episode;

    hasAirDate() {
        return this.episode.airs instanceof Date;
    }

    get day() {
        return utility.time.padDateWithZero(this.episode.airs.getDate());
    }

    get month() {
        return utility.time.shortMonth(this.episode.airs);
    }

    get year() {
        console.log('Getting year for ' + this.episode.show.title);
        return this.episode.airs.getFullYear();
    }

    get showLink() {
        // Todo: Fix this when we have a show page
        const urlFrendlyShowName = utility.urlTitle(this.episode.show.title);
        return `http://episodehunter.tv/shows/${this.episode.show.ids.id}/${urlFrendlyShowName}`;
    }

    get showPoster() {
        return `http://img.episodehunter.tv/serie/poster/${this.episode.show.poster}`;
    }

}

export default EpisodeRenderer;
