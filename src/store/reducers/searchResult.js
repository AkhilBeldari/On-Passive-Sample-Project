import { types } from '../constants';

const intialState = {
    loading: false,
    searchResult: [],
    error: false
}

export const searchResult = (state = intialState, action) => {
    switch (action.type) {
        case types.UPDATE_USERS:
            return {
                ...state,
                loading: true,
                searchResult: [],
                error: false
            }
        case types.SEARCH_RESULT_SUCCESS:
            return {
                ...state,
                loading: false,
                searchResult: action.payload,
                error: false
            }
        case types.SEARCH_RESULT_ERROR:
            return {
                ...state,
                loading: false,
                searchResult: [],
                error: true
            }
        case types.CLEAR_SEARCH_RESULT:
            return {
                ...state,
                loading: false,
                searchResult: [],
                error: false
            }
        default:
            return state;
    }
}