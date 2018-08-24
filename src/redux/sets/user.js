import { createSet } from '../reduxSets';

const initialState = {};

const user = createSet(
  {
    SET_USER: (state, action) => action.payload,
    CLEAR_USER: (state, action) => initialState,
  },
  initialState,
);

export default user;
