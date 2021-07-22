import { types } from '../constants';

export const getPortalUsersDetails = () => {
    return {
        type: types.PORTAL_USERS
    }
}

export const getClientUsersDetails = () => {
    return {
        type: types.CLIENT_USERS
    }
}

export const updateUsers = (userData) => {
    return {
        type: types.UPDATE_USERS,
        payload: userData
    }
}

export const deleteUsers = (userData) => {
    return {
        type: types.USER_DELETE,
        payload: userData
    }
}

export const clearPortalUsers = (message) => {
    return {
        type: types.CLEAR_PORTAL_USERS,
        payload: message
    }
}
