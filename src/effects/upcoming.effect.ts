import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { UpcomingService } from '../services';
import { upcomingActions } from '../actions';

@Injectable()
export class UpcomingEffects {
    @Effect() upcomingShowsEffect$;

    constructor(actions$: Actions, upcomingService: UpcomingService) {
        this.upcomingShowsEffect$ = actions$
            .ofType(upcomingActions.FETCH_SHOWS)
            .switchMap(() => upcomingService.getUpcomingEpisodes())
            .map(episodes => upcomingActions.replace(episodes));
    }

}
