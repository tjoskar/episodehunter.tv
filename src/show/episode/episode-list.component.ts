import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, Injectable, Inject, Injector } from '@angular/core';
import { Store } from '@ngrx/store';
import { SeasonNumberPipe } from './season-number.pipe';
import { ApplicationState } from '../../model';
// import {EpisodeService} from './episode.service';
// import EpisodeComponent from './episode.component';
//
// @Component({
//     selector: 'eh-episode-list',
//     templateUrl: require('./template/episode-list.html'),
//     directives: [EpisodeComponent],
//     providers: [EpisodeService]
// })
// class EpisodeListComponent {
//     @Input() showId;
//     @Output() toggleWatchStatus = new EventEmitter();
//     seasons = {};
//     seasonNumbers = [];
//     episodes = [];
//     selectedSeason = 1;
//     service: EpisodeService;
//
//     constructor(service: EpisodeService) {
//         this.service = service;
//     }
//
//     ngAfterContentInit() {
//         this.service
//             .getEpisodes(this.showId)
//             .subscribe(
//                 seasons => {
//                     this.seasons = seasons;
//                     this.seasonNumbers = Object.keys(this.seasons);
//                     this.changeSeason('1');
//                 },
//                 error => console.error(error)
//             );
//     }
//
//     changeSeason(season) {
//         this.selectedSeason = season;
//         this.episodes = this.seasons[season];
//     }
//
// }


@Injectable()
class HejService {
    test = 'Hej';
    hej;

    constructor(hejs: Store<any>) {
        this.hej = hejs;
    }
}

// class Hej {
//
//     constructor(hejs: Store<any>) {
//
//     }
//     test = 'Hej';
// }

@Component({
    selector: 'eh-episode-list',
    template: require('./template/episode-list.html'),
    pipes: [ SeasonNumberPipe ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EpisodeListComponent extends HejService {
    @Input() seasons;
    // hej;

    constructor(@Inject(Store) hejs) {
        super(null);
        // this.hej = hejs.dispatch;
    }

    ngOnInit() {
        // const test = Inject(HejService)();
        console.log('=========');
        console.log(this.hej);
        console.log('=========');
    }
}


export default EpisodeListComponent;
