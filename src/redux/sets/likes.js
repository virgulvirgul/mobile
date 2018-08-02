import { concat } from 'lodash';

import { createSet } from '../reduxSets';

const initialState = [];

const likes = createSet(
  {
    ADD_LIKES: (state, action) => concat([], action.payload, state),
    SET_LIKES: (state, action) => action.payload,
    CLEAR_LIKES: (state, action) => initialState,
  },
  initialState
);

export default likes;
