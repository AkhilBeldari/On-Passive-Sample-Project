import { types } from '../constants';

const intialState = {
    loading: false,
    newSoftwareDetails: {},
    error: false
}

export const productUpload = (state = intialState, action) => {
    switch (action.type) {
        case types.PRODUCT_UPLOAD:
            return {
                ...state,
                loading: true,
                newSoftwareDetails: {},
                error: false
            }
        case types.UPDATE_PRODUCT_UPLOAD:
            return {
                ...state,
                loading: true,
                newSoftwareDetails: {},
                error: false
            }
        case types.PRODUCT_UPLOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                newSoftwareDetails: action.payload,
                error: false
            }
        case types.PRODUCT_UPLOAD_ERROR:
            return {
                ...state,
                loading: false,
                newSoftwareDetails: {},
                error: true
            }
        case types.CLEAR_NEW_PRODUCT_DATA:
            return {
                ...state,
                loading: false,
                newSoftwareDetails: {},
                error: false
            }
        default:
            return state;
    }
}