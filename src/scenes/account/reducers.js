import * as sessions_actions from './actions';

const initialState = {
  myTrips: [],
};

export default function AccountReducer(state = initialState, action = {}) {
  switch (action.type) {
    case sessions_actions.types.MY_TRIPS_FETCHED:
      return {
        ...state,
        myTrips: action.payload.myTrips,
      };
    default:
      return state;
  }
}
