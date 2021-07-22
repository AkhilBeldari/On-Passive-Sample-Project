import { types } from '../constants';

const intialState = {
    loading: false,
    softwareDetails: {},
    error: false
}

export const downloadSoftware = (state = intialState, action) => {
    switch (action.type) {
        case types.DOWNLOAD_SOFTWARE:
            return {
                ...state,
                loading: true,
                softwareDetails: {},
                error: false
            }
        case types.DOWNLOAD_SOFTWARE_SUCCESS:
            return {
                ...state,
                loading: false,
                softwareDetails: action.payload,
                error: false
            }
        case types.DOWNLOAD_SOFTWARE_ERROR:
            return {
                ...state,
                loading: false,
                softwareDetails: {},
                error: true
            }
        case types.CLEAR_DOWNLOAD_SOFTWARE_DATA:
            return {
                ...state,
                loading: false,
                softwareDetails: {},
                error: false
            }
        default:
            return state;
    }
}