import { types } from '../constants';

export const getHomePageProducts = () => {
    return {
        type: types.HOME_PAGE_PRODUCTS
    }
}

export const clearHomePageProducts = (message) => {
    return {
        type: types.CLEAR_HOME_PAGE_PRODUCTS,
        payload: message
    }
}