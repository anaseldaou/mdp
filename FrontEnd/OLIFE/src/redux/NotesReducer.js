import * as ActionTypes from './ActionTypes';

// The auth reducer. The starting state sets authentication
// based on a token being in local storage. In a real app,
// we would also want a util to check if the token is expired.
export const Notes = (state = {
        notes: []
    }, action) => {
    switch (action.type) {
        case ActionTypes.NOTES_REQUEST:
            return {...state,
                notes:[]
            };
        case ActionTypes.NOTES_RECEIVED:
            return {...state,
                notes: action.data
            }
        default:
            return state
    }
};