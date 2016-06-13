import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import utility from '../../../lib/utility';

@Component({
    selector: 'episode-renderer',
    styles: [ require('!raw!sass!./episode.scss') ],
    template: `
        <a href="{{showLink}}">
            <div class="poster">
                <hgroup>
                    <div class="info-row">
                        <p class="title">{{episode.show.title}}</p>
                        <p>Sunday</p>
                    </div>
                    <div class="info-row">
                        <p>S07E12</p>
                        <p>2015-04-12</p>
                    </div>
                </hgroup>
                <div
                    [ngStyle]="{'background-image': 'url(' + showFanart + ')'}"
                    class="backdrop">
                </div>
            </div>
        </a>
    `,
    changeDetection: ChangeDetectionStrategy.Detached
})
export class EpisodeRenderer {
    @Input() episode;
    day;
    month;
    year;
    showLink;
    showFanart;

    hasAirDate() {
        return this.episode.airs instanceof Date;
    }

    ngOnInit() {
        const urlFrendlyShowName = utility.urlTitle(this.episode.show.title);
        this.showLink = `http://episodehunter.tv/shows/${this.episode.show.ids.id}/${urlFrendlyShowName}`;
        this.showFanart = `http://img.episodehunter.tv/serie/fanart/${this.episode.show.fanart}`;

        if (this.hasAirDate()) {
            this.day = utility.time.padDateWithZero(this.episode.airs.getDate());
            this.month = utility.time.shortMonth(this.episode.airs);
            this.year = this.episode.airs.getFullYear();
        }
    }

}
