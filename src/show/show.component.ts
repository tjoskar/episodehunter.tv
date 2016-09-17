import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { LazyLoadImageDirective } from 'ng2-lazyload-image';
import { RatingComponent } from '../components';
import FollowingButtonComponent from './following.component';
import { ProgressComponent } from './progress/progress.component';
import EpisodeListComponent from './episode/episode-list.component';
import { NextEpisodeComponent } from './next-episode/next-episode.component';
import { ShowService } from './show.service';
import { Seasons } from '../model';

@Component({
    selector: 'eh-show',
    template: require('./template/show.html'),
    styles: [ require('!raw!sass!./show.scss') ],
    directives: [ LazyLoadImageDirective, RatingComponent, FollowingButtonComponent, ProgressComponent, NextEpisodeComponent, EpisodeListComponent ],
    providers: [ ShowService ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShowComponent {
    showService: ShowService;
    seasons$: Observable<Seasons>;
    showId;
    show;

    constructor(showService: ShowService) {
        this.showId = 10;
        this.showService = showService;

        // Fetch from server
        const result = {
            followingStatus: 1,
            show: {
                title: ''
            }
        };
        this.show = result.show;
    }

    ngOnInit() {
        this.seasons$ = this.showService.fetchEpisodes(this.showId);
    }

    get showName() {
        console.log('getting showName');
        return 'Silicon Valley';
    }

    get numberWatchedEpisodes() {
        return 8;
    }

    get numberTotalEpisodes() {
        return 10;
    }

    get nextEpisode() {
        return {
            id: 790,
            name: 'Winter Is Coming',
            episode: 1,
            season: 1,
            firstAired: new Date('2011-04-17'),
            image: '',
            watched: new Date('2012-09-01T17:44:01.000Z')
        };
    }

    get voteResult() {
        return {
            totalScore: 100,
            totalVotes: 14,
            userVote: 6
        };
    }

}
