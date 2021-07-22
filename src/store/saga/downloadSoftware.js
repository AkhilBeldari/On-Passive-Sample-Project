import { types } from '../constants';
import { takeEvery, put, call, all } from 'redux-saga/effects';
import { DownloadSoftware } from '../../services/api';

function* getDownloadSoftware(action) {
    const { data, error } = yield call(DownloadSoftware.getDownloadSoftwareDetails, action.payload);
    if (data) {
        yield put({
            type: types.DOWNLOAD_SOFTWARE_SUCCESS,
            payload: data
        });
    } else if (data.msg && data.msg === "Token has expired") {
        yield put({
            type: types.SESSION_EXPIRY_SUCCESS,
            payload: true
        });
    } else if (data.error) {
        yield put({
            type: types.DOWNLOAD_SOFTWARE_ERROR,
        });
    }
}

export function* downloadSoftwareSaga() {
    yield all([
        takeEvery(types.DOWNLOAD_SOFTWARE, getDownloadSoftware),
    ])
}
