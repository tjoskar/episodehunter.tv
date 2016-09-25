import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { showActions } from '../actions';
import { getShow$ } from '../selectors';
import { ApplicationState } from '../reducers/reducers';
import { Seasons, Show } from '../model';

@Component({
    selector: 'show-page',
    template: `
        <show></show>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShowPageComponent {
    store: Store<ApplicationState>;
    seasons$: Observable<Seasons>;

    constructor(store: Store<ApplicationState>, route: ActivatedRoute) {
        this.store = store;
        this.store.dispatch(showActions.fetchShow(10));
        route
            .params
            .select<string>('id')
            .map(id => Number(id))
            .switchMap(id => store.let(getShow$(id)));

        // Fetch from server
        const show: Show = {
            ids: {
                id: 1
            },
            title: 'Mr. Robot',
            airs: {
                dayOfWeek: 'Monday',
                time: '20:00',
                first: '2015-09-27'
            },
            year: 2015,
            genre: ['Drama', 'Action'],
            language: 'en',
            overview: 'In the high-tech gold rush of modern Silicon Valley, the people most qualified to succeed are the least capable of handling success. A comedy partially inspired by Mike Judge\'s own experiences as a Silicon Valley engineer in the late 1980s.',
            runtime: '60',
            status: 'ongoing',
            pixelatedFanart: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAUFBQUFBQYGBgYICQgJCAwLCgoLDBINDg0ODRIbERQRERQRGxgdGBYYHRgrIh4eIisyKigqMjw2NjxMSExkZIYBCgoKCgoKCwwMCw8RDxEPFxUTExUXIhkaGRoZIjQhJiEhJiE0LjguKy44LlNBOjpBU2BRTFFgdGhodJOLk8DA///AABEIAAUABQMBEQACEQEDEQH/xABcAAEAAAAAAAAAAAAAAAAAAAAHEAEAAgEFAAAAAAAAAAAAAAACAQMRAAQFB0EBAQEAAAAAAAAAAAAAAAAAAAMEEQAABQUAAAAAAAAAAAAAAAAAAQIDQRITISKR/9oADAMBAAIRAxEAPwAZjt2+oGm3hNumMwmLmIUx7ic6mtPQ/iNSC1plsuj/2Q==',
            fanart: 'https://images.unsplash.com/photo-1450101215322-bf5cd27642fc?ixlib=rb-0.3.5&q=80&fm=jpg',
            poster: '57703ffa36a1c.jpg'
        };
        this.show = show;
    }

    ngOnInit() {
        this.store.dispatch(showActions.fetchShow(10));
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
