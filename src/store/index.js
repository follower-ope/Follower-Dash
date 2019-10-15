import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import sagas from './sagas';
import reducers from './ducks';

const middlewares = [];

const sagaMonitor = console.tron.createSagaMonitor();

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

middlewares.push(sagaMiddleware);

const composer = compose(
  applyMiddleware(...middlewares),
  console.tron.createEnhancer()
);

const store = createStore(reducers, composer);

sagaMiddleware.run(sagas);

export default store;
