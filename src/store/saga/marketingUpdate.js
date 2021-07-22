import { types } from '../constants';
import { takeEvery, put, call, all } from 'redux-saga/effects';
import { MarketingUpdate } from '../../services/api';

function* marketingUpdate(action) {
    const { data, error } = yield call(MarketingUpdate.marketingUpdate, action.payload);
    if (data) {
        if (data.message === "MarketingUpdate has been updated" || data.message === "MarketingUpdate has been created") {
            yield put({
                type: types.MARKETING_DETAILS_UPDATE_SUCCESS,
                payload: data
            });
        } else if (data.error) {
            yield put({
                type: types.MARKETING_DETAILS_UPDATE_ERROR,
            });
        } else if (data.msg && data.msg === "Token has expired") {
            yield put({
                type: types.SESSION_EXPIRY_SUCCESS,
                payload: true
            });
        }
    }
}

function* getMarketingDetails(action) {
    const { data, error } = yield call(MarketingUpdate.getMarketingDetails, action.payload);
    if (data) {
        if (data.id) {
            yield put({
                type: types.GET_MARKETING_DETAILS_SUCCESS,
                payload: data
            });
        } else if (data.message === "MarketingUpdate with given role type not found") {
            yield put({
                type: types.GET_MARKETING_DETAILS_ERROR,
            });
        }  
        else if (data.error) {
            yield put({
                type: types.GET_MARKETING_DETAILS_ERROR,
            });
        } else if (data.msg && data.msg === "Token has expired") {
            yield put({
                type: types.SESSION_EXPIRY_SUCCESS,
                payload: true
            });
        }
    }
}

export function* marketingUpdateSaga() {
    yield all([
        takeEvery(types.GET_MARKETING_DETAILS, getMarketingDetails),
        takeEvery(types.MARKETING_DETAILS_UPDATE, marketingUpdate)
    ])
}
