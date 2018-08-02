import React from 'react';

import { Container, H1, SearchFilters } from './';

export default class Navbar extends React.PureComponent {
  render() {
    return (
      <Container testID="Navbar">
        <H1>Navbar</H1>
        <SearchFilters />
      </Container>
    );
  }
}
