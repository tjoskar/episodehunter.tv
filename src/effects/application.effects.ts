import { Injectable } from '@angular/core';
import { StateUpdates, Effect } from '@ngrx/effects';
import { ApplicationState } from '../model/application';
import { saveState } from '../reducers/reducers';

@Injectable()
export class ApplicationEffects {
    @Effect() application$;

    constructor(updates$: StateUpdates<ApplicationState>) {
        this.application$ = updates$.do((d) => {
            saveState(d.state);
            console.log('hej: ', d.state);
        });
    }

}
