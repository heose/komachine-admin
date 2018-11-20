/* eslint-disable global-require,no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducer';
import rootSaga from './saga';

let enhancers;
if (process.env.NODE_ENV === 'production') {
  enhancers = compose();
} else {
  enhancers = compose();
  //   enhancers = compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
}
// const sagaMiddleware = createSagaMiddleware();
const makeStore = initialState => {
  createStore(rootReducer, initialState);
  // sagaMiddleware.run(rootSaga);
};

export default makeStore;
