import { upcomingShows } from '../upcomming/upcomming.reducer';

const appStateName = 'appState';
const REDUCERS = { upcomingShows };

const prevState = () => {
    return window[appStateName];
};
const saveState = state => {
    window[appStateName] = state;
};

export { REDUCERS, saveState, prevState };
