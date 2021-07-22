import { types } from '../constants';

const intialState = {
    loading: false,
    loggedIn: false,
    currentUser: '',
    disabled: false,
    userCreated: false,
    newUser: false,
    error: false,
    errorMessage: '',
    showHeader: false
}

export const login = (state = intialState, action) => {
    switch (action.type) {
        case types.USER_LOGIN:
            return {
                ...state,
                loading: true,
                loggedIn: false,
                currentUser: '',
                newUser: false,
                userCreated: false,
                disabled: false,
                error: false,
                errorMessage: '',
                showHeader: false

            }
        case types.ADMIN_LOGIN:
            return {
                ...state,
                loading: true,
                loggedIn: false,
                currentUser: '',
                newUser: false,
                userCreated: false,
                disabled: false,
                error: false,
                errorMessage: '',
                showHeader: false
            }
        case types.USER_LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                loggedIn: true,
                currentUser: action.payload,
                disabled: false,
                userCreated: false,
                newUser: false,
                error: false,
                errorMessage: '',
                showHeader: true
            }
        case types.USER_NEW:
            return {
                ...state,
                loading: false,
                loggedIn: false,
                currentUser: '',
                disabled: false,
                userCreated: false,
                newUser: action.payload,
                error: false,
                errorMessage: '',
                showHeader: false
            }
        case types.USER_DISABLED:
            return {
                ...state,
                loading: false,
                loggedIn: false,
                currentUser: '',
                userCreated: false,
                disabled: action.payload,
                newUser: false,
                error: false,
                errorMessage: '',
                showHeader: false
            }
        case types.USER_CREATED:
            return {
                ...state,
                loading: false,
                loggedIn: false,
                currentUser: '',
                userCreated: action.payload,
                disabled: false,
                newUser: false,
                error: false,
                errorMessage: '',
                showHeader: false
            }
        case types.CLEAR_LOGIN_STATE:
            return {
                ...state,
                loading: false,
                loggedIn: false,
                currentUser: '',
                disabled: false,
                userCreated: false,
                newUser: false,
                error: false,
                errorMessage: '',
                showHeader: false
            }
        case types.USER_LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                loggedIn: false,
                currentUser: '',
                disabled: false,
                userCreated: false,
                newUser: false,
                error: true,
                errorMessage: action.payload,
                showHeader: false
            }
        default:
            return state;
    }
}