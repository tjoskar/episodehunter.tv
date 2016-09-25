import { Show } from '../model';
import { showActions } from '../actions';

export interface ShowState {
    show: Show;
    loading: boolean;
    error: any;
};

const initState: ShowState = {
    show: null,
    loading: false,
    error: null
};

export const show = (state: ShowState = initState, {type, payload}): ShowState => {
    switch (type) {
        case showActions.REPLACE_SHOW:
            return {
                show: payload,
                loading: false,
                error: null
            };
        default:
            return state;
    }
};
