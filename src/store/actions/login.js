import { types } from '../constants';

export const login = (userDetails) => {
    return {
        type: types.USER_LOGIN,
        payload: userDetails
    }
}

export const getCurrentUserDetails = (userId) => {
    return {
        type: types.USER_DETAILS,
        payload: userId
    }
}

export const loginSuccess = (userDetails) => {
    return {
        type: types.USER_LOGIN_SUCCESS,
        payload: userDetails
    }
}

export const clearLoginState = (message) => {
    return {
        type: types.CLEAR_LOGIN_STATE,
        payload: message
    }
}
