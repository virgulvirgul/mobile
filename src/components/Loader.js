import React from 'react';
import { Text, View, Image } from 'react-native';
import styled from 'styled-components';

const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const LoadingImage = styled.Image`
  width: 50px;
  height: 50px;
`;

export default class Loader extends React.PureComponent {
  render() {
    return (
      <LoadingContainer>
        <LoadingImage source={require('../../icon.png')} />
      </LoadingContainer>
    );
  }
}
