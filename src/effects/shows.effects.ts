import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { ShowService } from '../services';
import { showActions } from '../actions';

@Injectable()
export class ShowsEffects {
    @Effect() showsEffect$;

    constructor(actions$: Actions, showService: ShowService) {
        this.showsEffect$ = actions$
            .ofType(showActions.FETCH_SHOW)
            .switchMap(update => showService.fetchShow(update.payload))
            .map(show => showActions.addShow(show));
    }

}
