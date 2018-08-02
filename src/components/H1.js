import React from 'react';
import styled from 'styled-components';

const Text = styled.Text`
  font-size: 32px;
`;

export default class H1 extends React.PureComponent {
  render() {
    const { color, ...rest } = this.props;
    return <Text {...rest} />;
  }
}
