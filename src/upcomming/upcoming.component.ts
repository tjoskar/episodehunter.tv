import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApplicationState } from '../model';
import { UpcomingService } from './upcoming.service';

@Component({
    selector: 'upcoming',
    template: `
        <div class="page-content">
            <h2>Upcoming</h2>
            <div class="divider"></div>
            <upcoming-shows [upcomingShows]="upcomingShows$ | async"></upcoming-shows>
        </div>
    `,
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
