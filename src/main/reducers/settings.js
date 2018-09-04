import actions from './actions';
import config from '../../libs/config';

const initialState = {
  language: config.DEFAULT_LOCALE,
};

export default function settingsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case actions.types.SET_LANGUAGE:
      return {
        ...state,
        language: action.payload.language,
      };
    default:
      return state;
  }
}
