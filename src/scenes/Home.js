import React from 'react';

import { Container, H1, Navbar, TripCard } from '../components';

export default class Home extends React.PureComponent {
  render() {
    return (
      <Container testID="Home">
        <Navbar />

        <Container>
          <H1>Home</H1>
        </Container>

        <Container>
          <H1>Cards</H1>
          <TripCard />
        </Container>
      </Container>
    );
  }
}
