import { types } from '../constants';
import { takeEvery, put, call, all } from 'redux-saga/effects';
import { Products } from '../../services/api';

function* getProductDetails(action) {
    const { data, error } = yield call(Products.getProductDetails, action.payload);
    if (data) {
        yield put({
            type: types.PRODUCT_DETAILS_SUCCESS,
            payload: data
        });
    }
    else if (data.error) {
        yield put({
            type: types.PRODUCT_DETAILS_ERROR,
        });
    }
    else if (data.msg && data.msg === "Token has expired") {
        yield put({
            type: types.SESSION_EXPIRY_SUCCESS,
            payload: true
        });
    }
}

function* getSubProduct(action) {
    const { data, error } = yield call(Products.getSubProduct, action.payload);
    if (data) {
        yield put({
            type: types.SUB_PRODUCT_SUCCESS,
            payload: data
        });
    } else if (data.error) {
        yield put({
            type: types.SUB_PRODUCT_ERROR,
        });
    } else if (data.msg && data.msg === "Token has expired") {
        yield put({
            type: types.SESSION_EXPIRY_SUCCESS,
            payload: true
        });
    }
}

function* newProduct(action) {
    const { data, error } = yield call(Products.newProduct, action.payload);
    if (data) {
        if (data.message) {
            yield put({
                type: types.NEW_PRODUCT_SUCCESS,
                payload: data.message
            });
        } else if (data.error) {
            yield put({
                type: types.NEW_PRODUCT_ERROR,
                payload: data.error
            });
        } else if (data.msg && data.msg === "Token has expired") {
            yield put({
                type: types.SESSION_EXPIRY_SUCCESS,
                payload: true
            });
        }
    }
}

function* getProducts() {
    const { data, error } = yield call(Products.getProducts);
    if (data) {
        if (data.length) {
            yield put({
                type: types.SOFTWARE_PRODUCTS_SUCCESS,
                payload: data
            });
        }
        else if (data.length === 0) {
            yield put({
                type: types.SOFTWARE_PRODUCTS_ERROR,
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
                type: types.SOFTWARE_PRODUCTS_ERROR,
            });
        }
    }
}

function* getSystemStatus() {
    const { data, error } = yield call(Products.getSystemStatus);
    if (data) {
        yield put({
            type: types.SYSTEM_STATUS_SUCCESS,
            payload: data
        });
    } else if (data.error) {
        yield put({
            type: types.SYSTEM_STATUS_ERROR,
        });
    } else if (data.msg && data.msg === "Token has expired") {
        yield put({
            type: types.SESSION_EXPIRY_SUCCESS,
            payload: true
        });
    }
}

function* deleteProduct(action) {
    const { data, error } = yield call(Products.deleteProduct, action.payload);
    if (data) {
        yield put({
            type: types.DELETE_PRODUCT_SUCCESS,
            payload: data
        });
    } else if (data.error) {
        yield put({
            type: types.DELETE_PRODUCT_ERROR,
        });
    } else if (data.msg && data.msg === "Token has expired") {
        yield put({
            type: types.SESSION_EXPIRY_SUCCESS,
            payload: true
        });
    }
}

function* deleteSoftware(action) {
    const { data, error } = yield call(Products.deleteSoftware, action.payload);
    if (data.message) {
        yield put({
            type: types.DELETE_PRODUCT_SUCCESS,
            payload: data
        });
    } else if (data.error) {
        yield put({
            type: types.DELETE_PRODUCT_ERROR,
        });
    } else if (data.msg && data.msg === "Token has expired") {
        yield put({
            type: types.SESSION_EXPIRY_SUCCESS,
            payload: true
        });
    }
}

function* getLink(action) {
    const { data, error } = yield call(Products.getLink, action.payload);
    if (data) {
        yield put({
            type: types.GET_LINK_SUCCESS,
            payload: data
        });
    } else if (data.error) {
        yield put({
            type: types.GET_LINK_ERROR,
        });
    } else if (data.msg && data.msg === "Token has expired") {
        yield put({
            type: types.SESSION_EXPIRY_SUCCESS,
            payload: true
        });
    }
}

export function* productsSaga() {
    yield all([
        takeEvery(types.SOFTWARE_PRODUCTS, getProducts),
        takeEvery(types.SYSTEM_STATUS, getSystemStatus),
        takeEvery(types.PRODUCT_DETAILS, getProductDetails),
        takeEvery(types.SUB_PRODUCT, getSubProduct),
        takeEvery(types.DELETE_PRODUCT, deleteProduct),
        takeEvery(types.GET_LINK, getLink),
        takeEvery(types.DELETE_SOFTWARE, deleteSoftware),
        takeEvery(types.NEW_PRODUCT, newProduct)
    ])
}
