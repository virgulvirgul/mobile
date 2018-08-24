import { concat } from 'lodash';

import { createSet } from '../reduxSets';

const initialState = [];

const comments = createSet(
  {
    ADD_COMMENTS: (state, action) => concat([], action.payload, state),
    SET_COMMENTS: (state, action) => action.payload,
    CLEAR_COMMENTS: (state, action) => initialState,
  },
  initialState,
);

export default comments;
