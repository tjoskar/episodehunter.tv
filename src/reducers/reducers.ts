import { upcomingShows } from './upcoming-shows.reducer';

const appStateName = 'appState';
const reducers = { upcomingShows };

const prevState = () => {
    return window[appStateName];
};
const saveState = state => {
    window[appStateName] = state;
};

export { reducers, saveState, prevState };
