import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import {Auth} from './auth';
import {Temperature} from './TemperatureReducer';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            auth: Auth,
            temperature : Temperature

        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}