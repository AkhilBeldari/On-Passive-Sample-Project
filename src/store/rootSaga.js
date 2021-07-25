import { all } from 'redux-saga/effects';
import {
    loginSaga
} from './saga';

export default function* rootSaga() {
    yield all([
        loginSaga(),
    ])
}