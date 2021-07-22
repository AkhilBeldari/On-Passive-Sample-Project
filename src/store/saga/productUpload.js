import { types } from '../constants';
import { takeEvery, put, call, all } from 'redux-saga/effects';
import { ProductUpload } from '../../services/api';

function* fileUpload(action) {
    const { data, error } = yield call(ProductUpload.fileUpload, action.payload);
    if (data) {
        yield put({
            type: types.FILE_UPLOAD_SUCCESS,
            payload: data
        });
    } else if (data.error) {
        yield put({
            type: types.FILE_UPLOAD_ERROR,
        });
    } else if (data.msg && data.msg === "Token has expired") {
        yield put({
            type: types.SESSION_EXPIRY_SUCCESS,
            payload: true
        });
    }
}

function* productUpload(action) {
    const { data, error } = yield call(ProductUpload.productDataUpload, action.payload);
    if (data) {
        yield put({
            type: types.PRODUCT_UPLOAD_SUCCESS,
            payload: data
        });
    } else if (data.error) {
        yield put({
            type: types.PRODUCT_UPLOAD_ERROR,
        });
    } else if (data.msg && data.msg === "Token has expired") {
        yield put({
            type: types.SESSION_EXPIRY_SUCCESS,
            payload: true
        });
    }
}

function* updateProductUpload(action) {
    const { data, error } = yield call(ProductUpload.updateProductDataUpload, action.payload);
    if (data) {
        yield put({
            type: types.PRODUCT_UPLOAD_SUCCESS,
            payload: data
        });
    } else if (data.error) {
        yield put({
            type: types.PRODUCT_UPLOAD_ERROR,
        });
    } else if (data.msg && data.msg === "Token has expired") {
        yield put({
            type: types.SESSION_EXPIRY_SUCCESS,
            payload: true
        });
    }
}

export function* productUploadSaga() {
    yield all([
        takeEvery(types.FILE_UPLOAD, fileUpload),
        takeEvery(types.PRODUCT_UPLOAD, productUpload),
        takeEvery(types.UPDATE_PRODUCT_UPLOAD, updateProductUpload),
    ])
}
