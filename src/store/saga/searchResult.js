import { types } from '../constants';
import { takeEvery, put, call, all } from 'redux-saga/effects';
import { SearchResult } from '../../services/api';

function* getSearchResult(action) {
    const { data, error } = yield call(SearchResult.getSearchResult, action.payload);
    if (data) {
        yield put({
            type: types.SEARCH_RESULT_SUCCESS,
            payload: data
        });
    } else if (data.error) {
        yield put({
            type: types.SEARCH_RESULT_ERROR,
        });
    } else if (data.msg && data.msg === "Token has expired") {
        yield put({
            type: types.SESSION_EXPIRY_SUCCESS,
            payload: true
        });
    }
}

export function* searchResultSaga() {
    yield all([
        takeEvery(types.SEARCH_RESULT, getSearchResult),
    ])
}
