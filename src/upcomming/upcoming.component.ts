import {Component} from 'angular2/core';
import UpcomingService from './upcoming.service';
import EpisodeRenderer from './episode.renderer';

@Component({
    selector: 'eh-upcoming',
    styles: ['episode-renderer {display: inline-block}'],
    templateUrl: 'dist/upcomming/upcoming.html',
    directives: [EpisodeRenderer]
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
                    console.dir(upcoming);
                },
                error => console.error(error),
                () => console.log('done')
            );
    }
}

export default UpcomingComponent;
