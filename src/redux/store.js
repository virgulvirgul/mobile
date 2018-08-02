import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootSet from './rootSet';

const { reducers } = rootSet;

export default function configureStore(initialState = {}) {
  const store = createStore(reducers, initialState, applyMiddleware(thunk));
  return store;
}
