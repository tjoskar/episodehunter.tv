import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { EpisodeRenderer } from './episode/episode.renderer';

@Component({
    selector: 'upcoming-shows',
    template: require('./upcoming-shows.html'),
    directives: [ EpisodeRenderer ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
class UpcomingShowsRenderer {
    @Input() upcomingShows;
}

export { UpcomingShowsRenderer };
