import * as searchResultsActions from './actions';

const initialState = {
  results: [],
  tags: [],
  latitude: 0,
  longitude: 0,
};

export default function SearchResultsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case searchResultsActions.types.RESULTS_FETCHED:
      return {
        ...state,
        results: action.payload.results,
      };
    default:
      return state;
  }
}
