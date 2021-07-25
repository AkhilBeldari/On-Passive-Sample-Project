import { applyMiddleware, createStore, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';
import rootSaga from './rootSaga';
import rootReducer from './rootReducer';
import middleware, { sagaMiddleware } from './middleware';

//========================================
// reducer & PersistentReducer
//========================================
const reducer = persistReducer(
    {
        key: 'on-passive', // key is required
        storage, // storage is now required (using localStorage)
        whitelist: [], // only this list will be persisted
        blacklist: [], // list will not be persisted
        stateReconciler: autoMergeLevel2
    },
    rootReducer
);

// ======================================================
// Store Enhancers
// ======================================================
const enhancers = []
let composeEnhancers = compose
const composeWithDevToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
if (typeof composeWithDevToolsExtension === 'function') {
    composeEnhancers = composeWithDevToolsExtension
}

// ======================================================
// Store Instantiation and HMR Setup
// ======================================================
const configStore = (initialState = {}) => {
    const store = createStore(reducer,
        initialState,
        composeEnhancers(
            applyMiddleware(...middleware),
            ...enhancers
        )
    );
    sagaMiddleware.run(rootSaga);
    return {
        persistor: persistStore(store),
        store,
    };
};

const { store, persistor } = configStore();
global.store = store;

export { store, persistor };