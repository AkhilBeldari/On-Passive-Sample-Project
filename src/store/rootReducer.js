import { combineReducers } from 'redux';

import {
    login, marketingUpdate, products, downloadSoftware, portalUsers, productUpload, fileUpload, homePageProducts, updateUsers, manageSoftware, searchResult, contactUs, fileAduit, sessionExpiry
} from './reducers';

const rootReducer = combineReducers({
    login: login,
    marketingUpdate: marketingUpdate,
    products: products,
    downloadSoftware: downloadSoftware,
    portalUsers: portalUsers,
    productUpload: productUpload,
    fileUpload: fileUpload,
    homePageProducts: homePageProducts,
    updateUsers: updateUsers,
    manageSoftware: manageSoftware,
    searchResult: searchResult,
    contactUs: contactUs,
    fileAduit: fileAduit,
    sessionExpiry: sessionExpiry
})

export default rootReducer;