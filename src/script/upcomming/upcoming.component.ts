import {Component} from 'angular2/core';
import UpcomingService from './upcoming.service';
import EpisodeRenderer from './episode.renderer';

@Component({
    selector: 'eh-upcoming',
    styles: ['episode-renderer {display: inline-block}'],
    templateUrl: 'script/upcomming/upcoming.html',
    directives: [EpisodeRenderer],
    providers: [UpcomingService]
})
class UpcomingComponent {
    service: UpcomingService;
    upcoming;

    constructor(service: UpcomingService) {
        this.service = service;
        this.upcoming = {
            justAired: [],
            thisWeek: [],
            nextWeek: [],
            upcoming: [],
            tba: []
        };
        this.fetchUpcoming();
    }

    fetchUpcoming() {
        this.service.get()
            .subscribe(
                upcoming => this.upcoming = upcoming,
                error => console.error(error)
            );
    }
}

export default UpcomingComponent;
