import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'upcoming-shows',
    template: require('./upcoming-shows.html'),
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UpcomingShowsComponent {
    @Input() upcomingShows;
}
