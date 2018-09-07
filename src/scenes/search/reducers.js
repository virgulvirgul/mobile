import actions from './actions';

const { types } = actions;

const initialState = {
  error: null,
  isLoading: false,
  data: {
    trips: [],
  },
};

export default function AccountReducer(state = initialState, action = {}) {
  switch (action.type) {
    case types.SEARCH_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: initialState.error,
        data: initialState.data,
      };
    case types.SEARCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case types.SEARCH_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
