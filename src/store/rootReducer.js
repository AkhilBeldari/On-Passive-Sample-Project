import { combineReducers } from 'redux';

import {
    login
} from './reducers';

const rootReducer = combineReducers({
    login: login,
})

export default rootReducer;