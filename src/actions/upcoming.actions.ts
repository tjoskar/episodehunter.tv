import { Action } from '@ngrx/store';
import { UpcomingShows } from '../model/upcoming-shows';

export const upcomingActions = {

    FETCH_SHOWS: '[upcoming] fetch shows',
    fetchShows(): Action {
        return {
            type: upcomingActions.FETCH_SHOWS
        };
    },

    REPLACE: '[upcoming] replace state',
    replace(episodes: UpcomingShows): Action {
        return {
            type: upcomingActions.REPLACE,
            payload: episodes
        };
    }

};
