/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { LOGIN_USER_SUCCESS, LOGIN_USER, LOGIN_USER_ERROR } from './constants';

// The initial state of the App
export const initialState = {
    loading: false,
    error: false,
    currentUser: false,
    userData: {
        recipes: false,
    },
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
    produce(state, draft => {
        switch (action.type) {
            case LOGIN_USER:
                draft.loading = true;
                draft.error = false;
                draft.userData.recipes = false;
                break;

            case LOGIN_USER_SUCCESS:
                draft.userData.repositories = action.repos;
                draft.loading = false;
                draft.currentUser = action.username;
                break;

            case LOGIN_USER_ERROR:
                draft.error = action.error;
                draft.loading = false;
                break;
        }
    });

export default appReducer;