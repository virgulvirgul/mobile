import { combineReducers } from 'redux';

import SessionsReducer from '../../scenes/sessions/reducers';
import settings from './settings';

const allReducers = combineReducers({
  SessionsReducer,
  settings,
});

export default allReducers;
