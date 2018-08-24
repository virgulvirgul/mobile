import { merge } from 'lodash';
import { to } from 'await-to-js';

import { createSet } from '../reduxSets';

const initialState = {
  data: {},
  state: {
    loading: false,
    error: false,
    success: false,
    loaded: false,
  },
};

const events = createSet(
  {
    ADD_EVENTS: (state, action) => merge({}, state, { data: action.payload }),
    SET_EVENTS: (state, action) => ({
      state: state.state,
      data: action.payload,
    }),
    CLEAR_EVENTS: (state, action) => initialState,
    FETCH_REQUEST_EVENTS: (state, action) => ({
      ...state,
      state: {
        loading: true,
        error: false,
        success: false,
        loaded: false,
      },
    }),
    FETCH_FAILURE_EVENTS: (state, action) => ({
      ...state,
      state: {
        loading: false,
        error: true,
        success: false,
        loaded: true,
        message: action.payload,
      },
    }),
    FETCH_SUCCESS_EVENTS: (state, action) => ({
      ...state,
      state: {
        loading: false,
        error: false,
        success: true,
        loaded: true,
      },
    }),
  },
  initialState,
);

events.actions.asyncFetchEvents = () => async dispatch => {
  dispatch(events.actions.fetchRequestEvents());

  const url = `/api/v1/events/?event_type=successful`;
  const [error1, response] = await to(fetch(url));
  if (error1) {
    return dispatch(events.actions.fetchFailureEvents(error1));
  }

  const [error2, responseBody] = await to(response.json());
  if (error2) {
    return dispatch(events.actions.fetchFailureEvents(error2));
  }
  if (!response.ok) {
    return dispatch(events.actions.fetchFailureEvents(responseBody));
  }

  dispatch(events.actions.fetchSuccessEvents());
  return dispatch(events.actions.setEvents(responseBody));
};

export default events;
