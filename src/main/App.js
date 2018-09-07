import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import { FetchProvider } from 'react-data-fetching';
import store from './store';
import Router from './Router';
import config from '../libs/config';
import navigationService from '../services/navigation';
import Container from '../components/Container';
import Loader from '../components/Loader';

export default class RootProvider extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <FetchProvider api={config.API_URL} loader={<Loader />} timeout={5000}>
          <Container>
            <StatusBar backgroundColor="#dddddd" barStyle="light-content" />
            <Router ref={navigator => navigationService.setNavigator(navigator)} />
          </Container>
        </FetchProvider>
      </Provider>
    );
  }
}
