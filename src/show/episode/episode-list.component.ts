import {Component, Input, Output, EventEmitter} from '@angular/core';
import {EpisodeService} from './episode.service';
import EpisodeComponent from './episode.component';

@Component({
    selector: 'eh-episode-list',
    templateUrl: require('./template/episode-list.html'),
    directives: [EpisodeComponent],
    providers: [EpisodeService]
})
class EpisodeListComponent {
    @Input() showId;
    @Output() toggleWatchStatus = new EventEmitter();
    seasons = {};
    seasonNumbers = [];
    episodes = [];
    selectedSeason = 1;
    service: EpisodeService;

    constructor(service: EpisodeService) {
        this.service = service;
    }

    ngAfterContentInit() {
        this.service
            .getEpisodes(this.showId)
            .subscribe(
                seasons => {
                    this.seasons = seasons;
                    this.seasonNumbers = Object.keys(this.seasons);
                    this.changeSeason('1');
                },
                error => console.error(error)
            );
    }

    changeSeason(season) {
        this.selectedSeason = season;
        this.episodes = this.seasons[season];
    }

}

export default EpisodeListComponent;
