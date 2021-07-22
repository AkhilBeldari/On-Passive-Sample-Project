import { types } from '../constants';

const intialState = {
    loading: false,
    marketingDetails: "",
    updateSuccess: false,
    error: false
}

export const marketingUpdate = (state = intialState, action) => {
    switch (action.type) {
        case types.GET_MARKETING_DETAILS:
            return {
                ...state,
                loading: true,
                marketingDetails: "",
                updateSuccess: false,
                error: false
            }
        case types.GET_MARKETING_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                marketingDetails: action.payload,
                updateSuccess: false,
                error: false
            }
        case types.GET_MARKETING_DETAILS_ERROR:
            return {
                ...state,
                loading: false,
                marketingDetails: "",
                updateSuccess: false,
                error: true
            }
        case types.MARKETING_DETAILS_UPDATE:
            return {
                ...state,
                loading: true,
                marketingDetails: "",
                updateSuccess: false,
                error: false
            }
        case types.MARKETING_DETAILS_UPDATE_SUCCESS:
            return {
                ...state,
                loading: false,
                marketingDetails: action.payload,
                updateSuccess: true,
                error: false
            }
        case types.MARKETING_DETAILS_UPDATE_ERROR:
            return {
                ...state,
                loading: false,
                updateSuccess: false,
                error: true
            }
        case types.CLEAR_MARKETING_DETAILS:
            return {
                loading: false,
                marketingDetails: "",
                updateSuccess: false,
                error: false
            }
        default:
            return state;
    }
}