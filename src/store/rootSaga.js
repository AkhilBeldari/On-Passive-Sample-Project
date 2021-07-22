import { all } from 'redux-saga/effects';
import {
    loginSaga, marketingUpdateSaga, productsSaga, downloadSoftwareSaga, portalUsersSaga, productUploadSaga, homePageProductsSaga, manageSoftwareSaga, searchResultSaga, raiseTicketSaga, fileAduitSaga
} from './saga';

export default function* rootSaga() {
    yield all([
        loginSaga(),
        marketingUpdateSaga(),
        productsSaga(),
        downloadSoftwareSaga(),
        portalUsersSaga(),
        productUploadSaga(),
        homePageProductsSaga(),
        manageSoftwareSaga(),
        searchResultSaga(),
        raiseTicketSaga(),
        fileAduitSaga()
    ])
}