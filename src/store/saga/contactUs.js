import { types } from '../constants';
import { takeEvery, put, call, all } from 'redux-saga/effects';
import { RaiseTicket } from '../../services/api';

function* raiseTicket(action) {
    const { data, error } = yield call(RaiseTicket.raiseTicket, action.payload);
    if (data) {
        if (data.message) {
            yield put({
                type: types.RAISE_TICKET_SUCCESS,
                payload: data.message
            });
        }
        else if (data.msg && data.msg === "Token has expired") {
            yield put({
                type: types.SESSION_EXPIRY_SUCCESS,
                payload: true
            });
        }
        else if (data.error) {
            yield put({
                type: types.RAISE_TICKET_ERROR,
                payload: data.error
            });
        }
    }
}

export function* raiseTicketSaga() {
    yield all([
        takeEvery(types.RAISE_TICKET, raiseTicket)
    ])
}
