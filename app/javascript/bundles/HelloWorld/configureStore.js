import { createStore, applyMiddleware, compose } from "redux";

// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/rootReducers';
import storage from 'redux-persist/lib/storage'
import rootSaga from './sagas/rootSaga';
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import { persistReducer, persistStore } from "redux-persist";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2
};

const pReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  pReducer,
  composeEnhancer(applyMiddleware(sagaMiddleware)),
);
export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga)