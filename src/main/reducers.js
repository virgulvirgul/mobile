import { combineReducers } from 'redux';

import SessionsReducer from '../scenes/sessions/reducers';

const combineFlat = reducers => (state, action) =>
  reducers.reduce((newState, reducer) => reducer(newState, action), state);

const allReducers = combineReducers({
  SessionsReducer,
  // TripsReducer: combineFlat([TripsReducer, CheckoutReducer]),
});

export default allReducers;
