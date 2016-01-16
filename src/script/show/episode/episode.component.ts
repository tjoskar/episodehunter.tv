import {Component, Input, Output, EventEmitter} from 'angular2/core';
import utility from '../../lib/utility';
import {EpisodeService} from './episode.service';

@Component({
    selector: 'episode-component',
    template: `
    <div class="episode">
        <div class="episode-info--img">
            <span>{{watchDate}}</span>
            <img src="{{episodeImage}}" alt="">
        </div>
        <div class="episode-info">
            <h3>{{episode.name}}</h3>
            <span>{{episodeNumber}} {{airDate}}</span>
            <p>{{episode.overview}}</p>
            <button (click)="toggleWatched()" class="mdl-button mdl-js-button mdl-js-ripple-effect">{{watchedButtonText}}</button>
        </div>
    </div>`,
    directives: [],
    providers: [EpisodeService],
})
class EpisodeComponent {
    service: EpisodeService;
    @Input() episode;
    @Output() toggleWatchStatus = new EventEmitter();

    constructor(service: EpisodeService) {
        this.service = service;
    }

    toggleWatched() {
        let watched;
        const orgWatchedValue = this.episode.watched;
        if (this.episode.watched) {
            watched = this.service.markEpisodeAsUnwatched(this.episode.id);
            this.episode.watched = null;
        } else {
            watched = this.service.markEpisodeAsWatched(this.episode.id);
            this.episode.watched = (new Date()).toUTCString();
        }

        watched.subscribe(
            () => this.toggleWatchStatus.emit(this.episode.id),
            () => this.episode.watched = orgWatchedValue
        );
    }

    get watchDate() {
        if (this.episode.watched) {
            const date = new Date(this.episode.watched);
            return utility.time.convertToDateString(date);
        }
    }

    get episodeImage() {
        if (this.episode.image) {
            return `http://img.episodehunter.tv/episode/${this.episode.image}`;
        } else {
            return `http://img.episodehunter.tv/episode/1363113862.png`;
        }
    }

    get airDate() {
        if (this.episode.firstAired) {
            const date = new Date(this.episode.firstAired);
            if (date.getTime() > utility.time.now()) {
                return `Airs ${this.episode.firstAired}`;
            } else {
                return `Aired ${this.episode.firstAired}`;
            }
        } else {
            return '-';
        }
    }

    get episodeNumber() {
        return `S${('0' + this.episode.season).slice(-2)}E${('0' + this.episode.episode).slice(-2)}`;
    }

    get watchedButtonText() {
        return this.episode.watched ? 'Mark as unwatched' : 'Mark as watched';
    }

}

export default EpisodeComponent;
