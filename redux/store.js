import nextConnectRedux from 'next-connect-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';
const middleware = [thunk];
const enhancers = [];
export const initStore = () => {
  let store = createStore(rootReducer, compose(applyMiddleware(...middleware), ...enhancers));
  return store;
};

export const nextConnect = nextConnectRedux(initStore);
