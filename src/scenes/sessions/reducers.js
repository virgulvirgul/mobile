import * as sessions_actions from './actions';

const initialState = {
  session: {},
  sessionError: {},
};

export default function SessionsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case sessions_actions.types.SESSION_SUCCESS:
      return {
        ...state,
        session: action.payload.session,
        sessionError: {},
      };
    case sessions_actions.types.SESSION_ERROR:
      return {
        ...state,
        sessionError: action.payload,
      };
    default:
      return state;
  }
}
