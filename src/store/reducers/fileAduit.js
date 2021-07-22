import { types } from '../constants';

const intialState = {
    loading: false,
    fileAduit: "",
    error: false
}

export const fileAduit = (state = intialState, action) => {
    switch (action.type) {
        case types.FILE_ADUIT:
            return {
                ...state,
                loading: true,
                fileAduit: "",
                error: false
            }
        case types.FILE_ADUIT_SUCCESS:
            return {
                ...state,
                loading: false,
                fileAduit: action.payload,
                error: false
            }
        case types.FILE_ADUIT_ERROR:
            return {
                ...state,
                loading: false,
                fileAduit: "",
                error: true
            }
        case types.CLEAR_FILE_ADUIT:
            return {
                loading: false,
                fileAduit: "",
                error: false
            }
        default:
            return state;
    }
}