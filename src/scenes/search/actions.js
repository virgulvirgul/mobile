import axios from 'axios';
import config from '../../libs/config';
import navigationService from '../../services/navigation'

const types = {
  SEARCH_REQUEST: 'SEARCH_REQUEST',
  SEARCH_SUCCESS: 'SEARCH_SUCCESS',
  SEARCH_ERROR: 'SEARCH_ERROR',
};

const searchRequest = payload => ({
  type: types.SEARCH_REQUEST,
  payload,
});

const searchSuccess = results => ({
  type: types.SEARCH_SUCCESS,
  payload: results,
});

const searchError = payload => ({
  type: types.SEARCH_ERROR,
  payload: {
    code: payload.code,
    message: payload.message,
  },
});

const search = data => async (dispatch) => {
  try {
    const { tags, lat, lng } = data;

    dispatch(searchRequest(data));

    navigationService.navigate('SearchResults');

    const results = await axios.get(
      `${config.API_URL}/search`,
      {
        params: { tags: tags.join(','), lat, lng },
      },
    );

    dispatch(searchSuccess(results.data));
  } catch (error) {
    console.log(error);
  }
};

export default {
  types,
  searchRequest,
  searchSuccess,
  searchError,
  search,
};
