import { combineReducers } from 'redux';

import SessionsReducer from '../scenes/sessions/reducers';
import SearchResultsReducer from '../scenes/searchResults/reducers';
import AccountReducer from '../scenes/account/reducers';
import search from '../scenes/search/reducers';

const allReducers = combineReducers({
  SessionsReducer,
  SearchResultsReducer,
  AccountReducer,
  search,
});

export default allReducers;
