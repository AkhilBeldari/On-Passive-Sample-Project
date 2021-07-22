import { types } from '../constants';

const intialState = {
    loading: false,
    homePageProducts: [],
    error: false
}

export const homePageProducts = (state = intialState, action) => {
    switch (action.type) {
        case types.HOME_PAGE_PRODUCTS:
            return {
                ...state,
                loading: true,
                homePageProducts: [],
                error: false
            }
        case types.HOME_PAGE_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                homePageProducts: action.payload,
                error: false
            }
        case types.HOME_PAGE_PRODUCTS_ERROR:
            return {
                ...state,
                loading: false,
                homePageProducts: [],
                error: true
            }
        case types.CLEAR_HOME_PAGE_PRODUCTS:
            return {
                loading: false,
                homePageProducts: [],
                error: false
            }
        default:
            return state;
    }
}