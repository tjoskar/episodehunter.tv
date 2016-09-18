import { UpcomingShows } from '../model/upcoming-shows';

export const actions = {
    UPDATE_UPCOMING_SHOWS: 'UPDATE_UPCOMING_SHOWS',
};

export const upcomingShows = (state: UpcomingShows, {type, payload}: {type: string; payload: UpcomingShows}) => {
    switch (type) {
        case actions.UPDATE_UPCOMING_SHOWS:
            return payload;
        default:
            return state;
    }
};
