import { types } from '../constants';
import { takeEvery, put, call, all } from 'redux-saga/effects';
import { ManageSoftwares } from '../../services/api';

function* updateProduct(action) {
    const { data, error } = yield call(ManageSoftwares.updateProduct, action.payload);
    if (data.message) {
        yield put({
            type: types.UPDATE_PRODUCT_SUCCESS,
            payload: data
        });
    } else if (data.error) {
        yield put({
            type: types.UPDATE_PRODUCT_ERROR,
        });
    } else if (data.msg && data.msg === "Token has expired") {
        yield put({
            type: types.SESSION_EXPIRY_SUCCESS,
            payload: true
        });
    }
}

function* updateSoftware(action) {
    const { data, error } = yield call(ManageSoftwares.updateSoftware, action.payload);
    if (data.message) {
        yield put({
            type: types.UPDATE_SOFTWARE_SUCCESS,
            payload: data
        });
    } else if (data.error) {
        yield put({
            type: types.UPDATE_SOFTWARE_ERROR,
        });
    } else if (data.msg && data.msg === "Token has expired") {
        yield put({
            type: types.SESSION_EXPIRY_SUCCESS,
            payload: true
        });
    }
}

export function* manageSoftwareSaga() {
    yield all([
        takeEvery(types.UPDATE_PRODUCT, updateProduct),
        takeEvery(types.UPDATE_SOFTWARE, updateSoftware)
    ])
}
