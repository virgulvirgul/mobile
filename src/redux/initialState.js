const initialState = {
  comments: [],
  events: {
    data: {},
    state: {
      loading: false,
      error: false,
      success: false,
      loaded: false,
    },
  },
  likes: [],
  user: {
    name: '12b353',
    avatar:
      'https://storage.googleapis.com/opensea-static/opensea-profile/5.png',
  },
};

export default initialState;
