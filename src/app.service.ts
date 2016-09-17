import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApplicationState } from './model/application';
import { saveState } from './reducers/reducers';

@Injectable()
export class AppService {
    store: Store<ApplicationState>;

    constructor(store: Store<any>) {
        this.store = store;
    }

    syncCacheState() {
        this.store.subscribe(state => {
            console.log('saving state: ', state);
            saveState(state);
        });
    }

}
