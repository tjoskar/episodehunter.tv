import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LazyLoadImageDirective } from 'ng2-lazyload-image';
import { RatingComponent } from '../components';
import FollowingButtonComponent from './following.component';
import { ProgressComponent } from './progress/progress.component';
import EpisodeListComponent from './episode/episode-list.component';
import { NextEpisodeComponent } from './next-episode/next-episode.component';

@Component({
    selector: 'eh-show',
    template: require('./template/show.html'),
    styles: [ require('!raw!sass!./show.scss') ],
    directives: [ LazyLoadImageDirective, RatingComponent, FollowingButtonComponent, ProgressComponent, NextEpisodeComponent, EpisodeListComponent ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShowComponent {
    showId;
    show;

    constructor() {
        this.showId = 1;

        // Fetch from server
        const result = {
            followingStatus: 1,
            show: {
                title: ''
            }
        };
        this.show = result.show;

    }

    get showName() {
        console.log('getting showName')
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
