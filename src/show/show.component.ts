import { Component, EventEmitter } from '@angular/core';
import { LazyLoadImageDirective } from 'ng2-lazyload-image';

import RatingComponent from '../lib/rating.component';
import FollowingButtonComponent from './following.component';
import ProgressComponent from './progress/progress.component';
import EpisodeListComponent from './episode/episode-list.component';
import NextEpisodeComponent from './next-episode/next-episode.component';

@Component({
    selector: 'eh-show',
    template: require('./template/show.html'),
    styles: [ require('!raw!sass!./show.scss') ],
    directives: [LazyLoadImageDirective, RatingComponent, FollowingButtonComponent, ProgressComponent, NextEpisodeComponent, EpisodeListComponent],
    providers: []
})
export class ShowComponent {
    updateEpisodeWatchStatus = new EventEmitter();
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

        this.updateEpisodeWatchStatus.subscribe(
            id => console.log('From show: ' + id),
            error => console.log(error),
            () => console.log('show says done')
        );
    }

    get showName() {
        console.log('getting showName')
        return 'Silicon Valley';
    }

    // ngAfterViewInit() {
    //     window['componentHandler'].upgradeAllRegistered()
    // }

}
