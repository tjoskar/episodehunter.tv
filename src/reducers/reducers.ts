import { shows, ShowsState } from './shows.reducers';
import { upcomingShows, UpcomingShowsState } from './upcoming-shows.reducer';

export interface ApplicationState {
    upcomingShows: UpcomingShowsState;
    shows: ShowsState;
}

const appStateName = 'appState';
const reducers = { upcomingShows, shows };

const prevState = () => {
    return window[appStateName];
};
const saveState = state => {
    window[appStateName] = state;
};

export { reducers, saveState, prevState };
