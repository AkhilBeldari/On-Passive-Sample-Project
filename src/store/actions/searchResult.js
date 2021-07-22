import { types } from '../constants';

export const getSearchResult = (searchKey) => {
    return {
        type: types.SEARCH_RESULT,
        payload: searchKey

    }
}


export const clearSearchResult = () => {
    return {
        type: types.CLEAR_SEARCH_RESULT,
    }
}