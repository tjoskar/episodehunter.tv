import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApplicationState } from '../model';
import { UpcomingService } from './upcoming.service';
import { UpcomingShowsRenderer } from './upcoming/upcoming.renderer';

@Component({
    selector: 'upcoming-shows',
    template: `
        <div class="page-content">
            <h2>Upcoming</h2>
            <div class="divider"></div>
            <upcoming-shows [upcomingShows]="upcomingShows$ | async"></upcoming-shows>
        </div>
    `,
    providers: [ UpcomingService ],
    directives: [ UpcomingShowsRenderer ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UpcomingComponent {
    service: UpcomingService;
    store: Store<ApplicationState>;
    upcomingShows$;
    upcoming;

    constructor(service: UpcomingService, store: Store<ApplicationState>) {
        this.service = service;
        this.store = store;
    }

    ngOnInit() {
        this.service.updateModel().subscribe();
        this.upcomingShows$ = this.store.select(s => s.upcomingShows);
    }
}
