import { types } from '../constants';

const intialState = {
    loading: false,
    loggedIn: false,
    currentUser: '',
    error: false,
    errorMessage: '',
}

export const login = (state = intialState, action) => {
    switch (action.type) {
        case types.USER_LOGIN:
            return {
                ...state,
                loading: true,
                loggedIn: false,
                currentUser: '',
                error: false,
                errorMessage: '',

            }
        case types.USER_LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                loggedIn: true,
                currentUser: action.payload,
                error: false,
                errorMessage: '',
            }
        case types.USER_NEW:
            return {
                ...state,
                loading: false,
                loggedIn: false,
                currentUser: '',
                error: false,
                errorMessage: '',
            }
        case types.USER_CREATED:
            return {
                ...state,
                loading: false,
                loggedIn: false,
                currentUser: '',
                error: false,
                errorMessage: '',
            }
        case types.CLEAR_LOGIN_STATE:
            return {
                ...state,
                loading: false,
                loggedIn: false,
                currentUser: '',
                errorMessage: '',
            }
        case types.USER_LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                loggedIn: false,
                currentUser: '',
                error: true,
                errorMessage: action.payload,
            }
        default:
            return state;
    }
}