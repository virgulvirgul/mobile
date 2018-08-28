import React from 'react';
import { Provider } from 'react-redux';
import { FetchProvider } from 'react-data-fetching';
import Loader from '../components/Loader';
import createStore from '../redux/store.js';
import initialState from '../redux/initialState';
import Root from './Root.js';
import Router from './Router.js';
import { config } from '../libs/config'

const store = createStore(initialState);

export default class RootProvider extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <FetchProvider api={config.API_URL} loader={<Loader />} timeout={5000}>
          <Root />
        </FetchProvider>
      </Provider>
    );
  }
}
