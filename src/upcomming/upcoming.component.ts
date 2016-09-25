import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApplicationState } from '../reducers/reducers';
import { upcomingActions } from '../actions';
import { getUpcomingShows$ } from '../selectors';

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
    store: Store<ApplicationState>;
    upcomingShows$;

    constructor(store: Store<ApplicationState>) {
        this.store = store;
    }

    ngOnInit() {
        this.store.dispatch(upcomingActions.fetchShows());
        this.upcomingShows$ = this.store.let(getUpcomingShows$());
    }
}
