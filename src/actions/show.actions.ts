import { Action } from '@ngrx/store';
import { Show } from '../model';

export const showActions = {

    FETCH_SHOW: '[show] fetch show',
    fetchShow(id: number): Action {
        return {
            type: showActions.FETCH_SHOW,
            payload: id
        };
    },

    REPLACE_SHOW: '[show] replace show',
    addShow(show: Show): Action {
        return {
            type: showActions.REPLACE_SHOW,
            payload: show
        };
    },

};
