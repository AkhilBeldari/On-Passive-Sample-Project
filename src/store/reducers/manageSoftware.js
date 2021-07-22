import { types } from '../constants';

const intialState = {
    loading: false,
    updateSoftware: false,
    updateProduct: false,
    error: false
}

export const manageSoftware = (state = intialState, action) => {
    switch (action.type) {
        case types.UPDATE_PRODUCT:
            return {
                ...state,
                loading: true,
                updateProduct: false,
                error: false
            }
        case types.UPDATE_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                updateProduct: true,
                error: false
            }
        case types.UPDATE_PRODUCT_ERROR:
            return {
                ...state,
                loading: false,
                updateProduct: false,
                error: true
            }
        case types.UPDATE_SOFTWARE:
            return {
                ...state,
                loading: true,
                updateSoftware: false,
                error: false
            }
        case types.UPDATE_SOFTWARE_SUCCESS:
            return {
                ...state,
                loading: false,
                updateSoftware: true,
                error: false
            }
        case types.UPDATE_SOFTWARE_ERROR:
            return {
                ...state,
                loading: false,
                updateSoftware: false,
                error: true
            }
        default:
            return state;
    }
}