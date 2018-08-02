import { combineReducers } from 'redux';
import { merge } from 'lodash';

import comments from './sets/comments';
import events from './sets/events';
import likes from './sets/likes';
import user from './sets/user';

const sets = {
  comments,
  events,
  likes,
  user,
};

const rootSet = {};

for (let key in sets) {
  const { types, actions, reducers } = sets[key];
  merge(rootSet, {
    types,
    actions,
    reducers: { [key]: reducers },
  });
}

rootSet.reducers = combineReducers(rootSet.reducers);
export default rootSet;
