import React from 'react';

import { Button, Container, H1 } from '../components';

export default class Home extends React.PureComponent {
  render() {
    return (
      <Container testID="home">
        <H1>Ask</H1>
        <Button
          onPress={() => alert('hi')}
          text="Sup"
        />
      </Container>
    );
  }
}
