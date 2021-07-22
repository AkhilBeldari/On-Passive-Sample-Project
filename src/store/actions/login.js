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

export const EnableSessionExpiry = (data) => {
    return {
        type: types.SESSION_EXPIRY_SUCCESS,
        payload: data
    }
}

export const clearSessionExpiry = () => {
    return {
        type: types.CLEAR_SESSION_EXPIRY,
    }
}

export const adminLogin = (adminUserDetails) => {
    return {
        type: types.ADMIN_LOGIN,
        payload: adminUserDetails
    }
}

export const clearUserDisableState = (val) => {
    return {
        type: types.USER_DISABLED,
        payload: val
    }
}
