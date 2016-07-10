import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { UpcomingEpisode } from '../../../model';
import { WeekdayPipe } from '../../../pipes';
import { utility, config } from '../../../lib';

@Component({
    selector: 'episode-renderer',
    styles: [ require('!raw!sass!./episode.scss') ],
    template: `
        <a href="{{showLink}}">
            <div class="poster">
                <hgroup>
                    <div class="info-row">
                        <p class="title">{{episode.show.title}}</p>
                        <p>{{episode.airs | weekday}}</p>
                    </div>
                    <div class="info-row">
                        <p>{{episodeNumber}}</p>
                        <p>{{episode.airs | date: 'yyyy-MM-dd'}}</p>
                    </div>
                </hgroup>
                <div
                    [ngStyle]="{'background-image': 'url(' + showFanart + ')'}"
                    class="backdrop">
                </div>
            </div>
        </a>
    `,
    pipes: [ WeekdayPipe ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EpisodeRenderer {
    @Input() episode: UpcomingEpisode;
    episodeNumber;
    showLink;
    showFanart;

    hasAirDate() {
        return this.episode.airs instanceof Date;
    }

    ngOnInit() {
        this.episodeNumber = this.generateEpisodenumber(this.episode);
        this.showLink = this.generateShowUrl(this.episode);
        this.showFanart = this.generateFanartUrl(this.episode);
    }

    generateFanartUrl(episode: UpcomingEpisode) {
        if (this.episode.show.fanart) {
            return config.baseShowFanartUrl + this.episode.show.fanart;
        }
        return '';
    }

    generateShowUrl(episode: UpcomingEpisode) {
        const urlFrendlyShowName = utility.urlTitle(this.episode.show.title);
        return `${config.baseShowUrl}${this.episode.show.ids.id}/${urlFrendlyShowName}`;
    }

    generateEpisodenumber(episode: UpcomingEpisode) {
        if (utility.is.set(episode.season) && utility.is.set(episode.episode)) {
            return utility.episodeNumber(episode.season, episode.episode);
        }
    }

}
