import { combineReducers } from 'redux';

import SessionsReducer from '../scenes/sessions/reducers';
import SearchResultsReducer from '../scenes/searchResults/reducers';
import AccountReducer from '../scenes/account/reducers';

const combineFlat = reducers => (state, action) =>
  reducers.reduce((newState, reducer) => reducer(newState, action), state);

const allReducers = combineReducers({
  SessionsReducer,
  SearchResultsReducer,
  AccountReducer
  // TripsReducer: combineFlat([TripsReducer, CheckoutReducer]),
});

export default allReducers;
