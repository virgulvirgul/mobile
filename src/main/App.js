import React from 'react';
import { Provider } from 'react-redux';

import { FetchProvider } from 'react-data-fetching';
import createStore from '../redux/store.js';
import initialState from '../redux/initialState';
import Router from './Router.js';
import { config } from '../libs/config'
import { StatusBar, Text } from 'react-native';
import Container from '../components/Container';
import Loader from '../components/Loader';

const store = createStore(initialState);

export default class RootProvider extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <FetchProvider api={config.API_URL} loader={<Loader />} timeout={5000}>
          <Container>
            <StatusBar backgroundColor="#dddddd" barStyle="light-content" />
            <Router />
          </Container>
        </FetchProvider>
      </Provider>
    );
  }
}
