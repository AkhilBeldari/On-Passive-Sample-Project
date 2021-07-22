import { types } from '../constants';

const intialState = {
    loading: false,
    portalUsersData: [],
    clientUsersData: [],
    error: false
}

export const portalUsers = (state = intialState, action) => {
    switch (action.type) {
        case types.PORTAL_USERS:
            return {
                ...state,
                loading: true,
                portalUsersData: [],
                error: false
            }
        case types.PORTAL_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                portalUsersData: action.payload,
                error: false
            }
        case types.PORTAL_USERS_ERROR:
            return {
                ...state,
                loading: false,
                portalUsersData: [],
                error: true
            }
        case types.CLEAR_PORTAL_USERS:
            return {
                ...state,
                loading: false,
                portalUsersData: [],
                error: false
            }
        case types.CLIENT_USERS:
            return {
                ...state,
                loading: true,
                clientUsersData: [],
                error: false
            }
        case types.CLIENT_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                clientUsersData: action.payload,
                error: false
            }
        case types.CLIENT_USERS_ERROR:
            return {
                ...state,
                loading: false,
                clientUsersData: [],
                error: true
            }
        case types.CLEAR_CLIENT_USERS:
            return {
                ...state,
                loading: false,
                clientUsersData: [],
                error: false
            }
        default:
            return state;
    }
}