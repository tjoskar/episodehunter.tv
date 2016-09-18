import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { UpcomingEpisode } from '../../model';
import { utility, config } from '../../lib';

@Component({
    selector: 'upcoming-episode',
    styles: [ require('!raw!sass!./episode.scss') ],
    template: `
        <a href="{{showLink}}">
            <div class="poster">
                <div class="episode-info">
                    <div class="info-row">
                        <p class="title">{{episode.show.title}}</p>
                        <p style="color: #fff">{{episode.airs | weekday}}</p>
                    </div>
                    <div class="info-row">
                        <p style="color: #fff">{{episodeNumber}} - {{episodeName}}</p>
                        <p style="color: #fff">{{episode.airs | date: 'yyyy-MM-dd'}}</p>
                    </div>
                </div>
                <div class="backdrop" [lazyLoad]="showFanart" offset="100"></div>
            </div>
        </a>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EpisodeComponent {
    @Input() episode: UpcomingEpisode;
    episodeNumber;
    showLink;
    showFanart;
    episodeName;

    hasAirDate() {
        return this.episode.airs instanceof Date;
    }

    ngOnInit() {
        this.episodeNumber = this.generateEpisodenumber(this.episode);
        this.showLink = this.generateShowUrl(this.episode);
        this.showFanart = this.generateFanartUrl(this.episode);
        this.episodeName = this.episode.title || 'TBA';
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
