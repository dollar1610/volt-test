import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleWare from 'redux-saga';
import rootReducer from './rootReducers';
import rootSaga from './rootSaga';

const sagaMiddleWare = createSagaMiddleWare();

const middleWares = [
  sagaMiddleWare,
  routerMiddleware(history),
];

const enchancers = [
  applyMiddleware(...middleWares),
];

const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const store = createStore(
  rootReducer,
  composeEnhancers(...enchancers)
);

sagaMiddleWare.run(rootSaga);

export default store;
