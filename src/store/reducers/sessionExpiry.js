import { types } from '../constants';

const intialState = {
    loading: false,
    session: false,
    error: false
}

export const sessionExpiry = (state = intialState, action) => {
    switch (action.type) {
        case types.SESSION_EXPIRY:
            return {
                ...state,
                loading: true,
                session: false,
                error: false
            }
        case types.SESSION_EXPIRY_SUCCESS:
            return {
                ...state,
                loading: false,
                session: action.payload,
                error: false
            }
        case types.SESSION_EXPIRY_ERROR:
            return {
                ...state,
                loading: false,
                session: false,
                error: true
            }
        case types.CLEAR_SESSION_EXPIRY:
            return {
                loading: false,
                session: false,
                error: false
            }
        default:
            return state;
    }
}