import React from 'react';

import { Container, H1 } from '../components';

export default class Splash extends React.PureComponent {
  render() {
    return (
      <Container testID="Splash">
        <H1>Splash</H1>
      </Container>
    );
  }
}
