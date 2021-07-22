import { types } from '../constants';
import { takeEvery, put, call, all } from 'redux-saga/effects';
import { HomePageProducts } from '../../services/api';

function* getHomePageProducts() {
    const { data, error } = yield call(HomePageProducts.getHomePageProducts);
    if (data) {
        if (data.length) {
            yield put({
                type: types.HOME_PAGE_PRODUCTS_SUCCESS,
                payload: data
            });
        } else if (data.error) {
            yield put({
                type: types.HOME_PAGE_PRODUCTS_ERROR,
            });
        }
        else if (data.msg && data.msg === "Token has expired") {
            yield put({
                type: types.SESSION_EXPIRY_SUCCESS,
                payload: true
            });
        }
    }
}

export function* homePageProductsSaga() {
    yield all([
        takeEvery(types.HOME_PAGE_PRODUCTS, getHomePageProducts),
    ])
}
