import { Observable } from 'rxjs/Observable';
import { ApplicationState } from '../reducers/reducers';

export function getShowState$() {
    return (state$: Observable<ApplicationState>) => state$
        .select(s => s.shows);
};

export function getShowState$(id: number) {
    return (state$: Observable<ApplicationState>) => state$
        .let(getShows$())
        .select(shows => shows[id]);
}
