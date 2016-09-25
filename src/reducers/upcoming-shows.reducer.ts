import { UpcomingShows } from '../model';
import { upcomingActions } from '../actions';

export interface UpcomingShowsState extends UpcomingShows {};

export const upcomingShows = (state: UpcomingShows, {type, payload}: {type: string; payload: UpcomingShows}) => {
    switch (type) {
        case upcomingActions.REPLACE:
            return payload;
        default:
            return state;
    }
};