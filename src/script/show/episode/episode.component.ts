import {Component, Input, Output, EventEmitter} from 'angular2/core';
import utility from '../../lib/utility';
import {EpisodeService} from './episode.service';

@Component({
    selector: 'episode-component',
    template: `
    <div class="episode">
        <div class="episode-info--img">
            <span>{{model.watchDate}}</span>
            <img src="{{model.episodeImage}}" alt="">
        </div>
        <div class="episode-info">
            <h3>{{model.name}}</h3>
            <span>{{model.episodeNumber}} {{model.airDate}}</span>
            <p>{{model.overview}}</p>
            <button (click)="toggleWatched()" class="mdl-button mdl-js-button mdl-js-ripple-effect">{{model.watchedButtonText}}</button>
        </div>
    </div>`,
    directives: [],
    providers: [EpisodeService],
})
class EpisodeComponent {
    service: EpisodeService;
    model;
    @Input() episode;
    @Output() toggleWatchStatus = new EventEmitter();

    constructor(service: EpisodeService) {
        this.service = service;
    }

    ngOnChanges() {
        if (this.episode) {
            this.model = {
                watchDate: this.watchDate(this.episode.watched),
                episodeImage: this.episodeImage(this.episode.image),
                name: this.episode.name,
                episodeNumber: this.episodeNumber(this.episode.season, this.episode.episode),
                airDate: this.airDate(this.episode.firstAired),
                overview: this.episode.overview,
                watchedButtonText: this.watchedButtonText(this.episode.watched)
            };
        } else {
            this.model = {};
        }
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

    watchDate(watched) {
        if (watched) {
            const date = new Date(watched);
            return utility.time.convertToDateString(date);
        }
        return '';
    }

    episodeImage(image) {
        return `http://img.episodehunter.tv/episode/${image || '1363113862.png'}`;
    }

    airDate(firstAired) {
        if (firstAired) {
            const date = new Date(firstAired);
            if (date.getTime() > utility.time.now()) {
                return `Airs ${firstAired}`;
            } else {
                return `Aired ${firstAired}`;
            }
        } else {
            return '-';
        }
    }

    episodeNumber(season, episode) {
        return `S${('0' + season).slice(-2)}E${('0' + episode).slice(-2)}`;
    }

    watchedButtonText(watched) {
        return watched ? 'Mark as unwatched' : 'Mark as watched';
    }

}

export default EpisodeComponent;
