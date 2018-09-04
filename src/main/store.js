import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import allReducers from './reducers';
//import { createTracker } from 'redux-segment';
//const tracker = createTracker();
//const middlewares = [thunk, tracker];
const middlewares = [thunk];

const store = createStore(allReducers, applyMiddleware(...middlewares));

export default store;
