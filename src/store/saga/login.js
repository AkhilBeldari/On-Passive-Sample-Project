import { types } from '../constants';
import { takeEvery, put, call, all } from 'redux-saga/effects';
import { Login, AdminLogin, UserDetails } from '../../services/api';

function* login(action) {
    const { data, error } = yield call(Login.login, action);
    if (data) {
        if (data.role) {
            yield put({
                type: types.USER_LOGIN_SUCCESS,
                payload: data
            });
        } else if (data.status === "new") {
            yield put({
                type: types.USER_NEW,
                payload: true
            });
        } else if (data.status === "created") {
            yield put({
                type: types.USER_CREATED,
                payload: true
            });
        } else if (data.status === "disabled") {
            yield put({
                type: types.USER_DISABLED,
                payload: true
            });
        }
    }
}

function* userDetails(action) {
    const { data, error } = yield call(UserDetails.userDetails, action.payload);
    if (data) {
        if (data.role) {
            yield put({
                type: types.USER_LOGIN_SUCCESS,
                payload: data
            });
        } else if (data.status === "new") {
            yield put({
                type: types.USER_NEW,
                payload: true
            });
        } else if (data.status === "created") {
            yield put({
                type: types.USER_CREATED,
                payload: true
            });
        } else if (data.status === "disabled") {
            yield put({
                type: types.USER_DISABLED,
                payload: true
            });
        } else if(data.error){
            yield put({
                type: types.USER_LOGIN_FAILURE,
                payload: true
            });
        }
    }
}

export function* loginSaga() {
    yield all([
        takeEvery(types.USER_LOGIN, login),
        takeEvery(types.USER_DETAILS, userDetails),
    ])
}
