import { types } from '../constants';

const intialState = {
    loading: false,
    ticketResponce: "",
    error: false
}

export const contactUs = (state = intialState, action) => {
    switch (action.type) {
        case types.RAISE_TICKET:
            return {
                ...state,
                loading: true,
                ticketResponce: "",
                error: false
            }
        case types.RAISE_TICKET_SUCCESS:
            return {
                ...state,
                loading: false,
                ticketResponce: action.payload,
                error: false
            }
        case types.RAISE_TICKET_ERROR:
            return {
                ...state,
                loading: false,
                ticketResponce: "",
                error: true
            }
        case types.CLEAR_RAISE_TICKET:
            return {
                ...state,
                loading: false,
                ticketResponce: "",
                error: false
            }
        default:
            return state;
    }
}