import { types } from '../constants';

export const raiseTicket = (ticketDetials) => {
    return {
        type: types.RAISE_TICKET,
        payload: ticketDetials
    }
}

export const clearRaiseTicket = () => {
    return {
        type: types.CLEAR_RAISE_TICKET,
    }
}