import { types } from '../constants';
import { takeEvery, put, call, all } from 'redux-saga/effects';
import { FileAduit } from '../../services/api';

function* postFileAduit(action) {
    const { data, error } = yield call(FileAduit.fileAduit, action.payload);
    if (data.message) {
        yield put({
            type: types.FILE_ADUIT_SUCCESS,
            payload: data.message
        });
    }
    else if (data.error) {
        yield put({
            type: types.FILE_ADUIT_ERROR,
        });
    }
    else if (data.msg && data.msg === "Token has expired") {
        yield put({
            type: types.SESSION_EXPIRY_SUCCESS,
            payload: true
        });
    }
}

export function* fileAduitSaga() {
    yield all([
        takeEvery(types.FILE_ADUIT, postFileAduit),
    ])
}
