import { types } from '../constants';

const intialState = {
    loading: false,
    fileDetails: {},
    error: false
}

export const fileUpload = (state = intialState, action) => {
    switch (action.type) {
        case types.FILE_UPLOAD:
            return {
                ...state,
                loading: true,
                fileDetails: {},
                error: false
            }
        case types.FILE_UPLOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                fileDetails: action.payload,
                error: false
            }
        case types.FILE_UPLOAD_ERROR:
            return {
                ...state,
                loading: false,
                fileDetails: {},
                error: true
            }
        case types.CLEAR_FILE_DATA:
            return {
                ...state,
                loading: false,
                fileDetails: {},
                error: false
            }
        default:
            return state;
    }
}