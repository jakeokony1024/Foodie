/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import history from './utils/history.js';
import globalReducer from './containers/App/reducer.js';
import {connectRouter} from "connected-react-router";
import {api} from "./services/api";

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
    const rootReducer = combineReducers({
        global: globalReducer,
        router: connectRouter(history),
        [api.reducerPath]: api.reducer,
        ...injectedReducers,

    });

    return rootReducer;
}