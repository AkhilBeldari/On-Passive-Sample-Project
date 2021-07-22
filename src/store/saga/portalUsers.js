import { types } from '../constants';
import { takeEvery, put, call, all } from 'redux-saga/effects';
import { PortalUsers } from '../../services/api';

function* getPortalUsers(action) {
    const { data, error } = yield call(PortalUsers.getPortalUsers, action.payload);
    if (data) {
        yield put({
            type: types.PORTAL_USERS_SUCCESS,
            payload: data
        });
    } else if (data.error) {
        yield put({
            type: types.PORTAL_USERS_ERROR,
        });
    } else if (data.msg && data.msg === "Token has expired") {
        yield put({
            type: types.SESSION_EXPIRY_SUCCESS,
            payload: true
        });
    }
}

function* getClientUsers(action) {
    const { data, error } = yield call(PortalUsers.getClientUsers, action.payload);
    if (data) {
        yield put({
            type: types.CLIENT_USERS_SUCCESS,
            payload: data
        });
    } else if (data.error) {
        yield put({
            type: types.CLIENT_USERS_ERROR,
        });
    } else if (data.msg && data.msg === "Token has expired") {
        yield put({
            type: types.SESSION_EXPIRY_SUCCESS,
            payload: true
        });
    }
}

function* updateUsers(action) {
    const { data, error } = yield call(PortalUsers.updateUsers, action.payload);
    if (data.message) {
        yield put({
            type: types.UPDATE_USERS_SUCCESS,
            payload: data
        });
    } else if (data.error) {
        yield put({
            type: types.UPDATE_USERS_ERROR,
        });
    } else if (data.msg && data.msg === "Token has expired") {
        yield put({
            type: types.SESSION_EXPIRY_SUCCESS,
            payload: true
        });
    }
}

function* deleteUsers(action) {
    const { data, error } = yield call(PortalUsers.deleteUsers, action.payload);
    if (data.message) {
        yield put({
            type: types.UPDATE_USERS_SUCCESS,
            payload: data
        });
    } else if (data.error) {
        yield put({
            type: types.UPDATE_USERS_ERROR,
        });
    } else if (data.msg && data.msg === "Token has expired") {
        yield put({
            type: types.SESSION_EXPIRY_SUCCESS,
            payload: true
        });
    }
}

export function* portalUsersSaga() {
    yield all([
        takeEvery(types.PORTAL_USERS, getPortalUsers),
        takeEvery(types.CLIENT_USERS, getClientUsers),
        takeEvery(types.UPDATE_USERS, updateUsers),
        takeEvery(types.USER_DELETE, deleteUsers)
    ])
}
