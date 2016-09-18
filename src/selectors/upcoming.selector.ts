import { Observable } from 'rxjs/Observable';
import { ApplicationState } from '../model/application';

export function getUpcomingShows$() {
    return (state$: Observable<ApplicationState>) => state$
        .select(s => s.upcomingShows);
};
