import { types } from '../constants';

const intialState = {
    loading: false,
    updateUsers: false,
    error: false
}

export const updateUsers = (state = intialState, action) => {
    switch (action.type) {
        case types.UPDATE_USERS:
            return {
                ...state,
                loading: true,
                updateUsers: false,
                error: false
            }
        case types.UPDATE_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                updateUsers: true,
                error: false
            }
        case types.UPDATE_USERS_ERROR:
            return {
                ...state,
                loading: false,
                updateUsers: false,
                error: true
            }
        case types.CLEAR_UPDATE_USERS:
            return {
                ...state,
                loading: false,
                updateUsers: false,
                error: false
            }
        default:
            return state;
    }
}