import React from 'react';
import { StatusBar } from 'react-native';

import { Container } from '../components';
import Router from './Router';

export default class Root extends React.PureComponent {
  render() {
    return (
      <Container>
        <StatusBar backgroundColor="#dddddd" barStyle="light-content" />
        <Router />
      </Container>
    );
  }
}
