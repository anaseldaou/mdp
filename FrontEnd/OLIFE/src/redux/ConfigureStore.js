import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import {Auth} from './auth';
import {Temperature} from './TemperatureReducer';
import {Pluvio} from './PluvioReducer';
import {Wind} from './WindSpeedReducer';
import {Gaz} from './GazReducer';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            auth: Auth,
            temperature : Temperature,
            pluvio : Pluvio,
            wind:Wind,
            gaz:Gaz
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}