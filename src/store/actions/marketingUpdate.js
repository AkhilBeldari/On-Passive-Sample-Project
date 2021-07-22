import { types } from '../constants';

export const marketingUpdate = (marketingUpdateDetails) => {
    return {
        type: types.MARKETING_DETAILS_UPDATE,
        payload: marketingUpdateDetails
    }
}

export const getMarketingDetails = (role) => {
    return {
        type: types.GET_MARKETING_DETAILS,
        payload: role
    }
}

export const clearMarketingDetails = () => {
    return {
        type: types.CLEAR_MARKETING_DETAILS,
    }
}

