import React from 'react';

import { Container } from './';

export default class Loader extends React.PureComponent {
  render() {
    return <Container testID="SearchFilters">Loading ...</Container>;
  }
}
