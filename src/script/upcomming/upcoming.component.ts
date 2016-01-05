import {Component} from 'angular2/core';
import UpcomingService from './upcoming.service';
import UpcomingRepository from './upcoming.repository';
import EpisodeRenderer from './episode.renderer';

@Component({
    selector: 'eh-upcoming',
    styles: ['episode-renderer {display: inline-block}'],
    templateUrl: 'script/upcomming/upcoming.html',
    directives: [EpisodeRenderer],
    providers: [UpcomingService, UpcomingRepository]
})
class UpcomingComponent {
    service: UpcomingService;
    upcoming;

    constructor(service: UpcomingService) {
        this.service = service;
        this.fetchUpcoming();
        this.upcoming = {
            justAired: [],
            thisWeek: [],
            nextWeek: [],
            upcoming: [],
            tba: []
        };
    }

    fetchUpcoming() {
        this.service.get()
            .subscribe(
                upcoming => {
                    this.upcoming = upcoming;
                    console.log(upcoming);
                },
                error => console.error(error),
                () => console.log('done')
            );
    }
}

export default UpcomingComponent;
