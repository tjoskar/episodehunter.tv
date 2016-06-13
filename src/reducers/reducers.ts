import { upcomingShows } from '../upcomming/upcomming.reducer';

const appStateName = 'appState';
const REDUCERS = { upcomingShows };
const prevState = () => {
    return window[appStateName];
};
const reducerPostMiddleware = state => {
    return state.do(val => {
        window[appStateName] = val;
    });
};

export { REDUCERS, reducerPostMiddleware, prevState };
