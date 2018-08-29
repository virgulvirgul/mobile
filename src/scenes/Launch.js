import React from 'react';
import styled from 'styled-components';
import { Button, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import { H1, VoiceRecorder } from '../components';

const LaunchContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 100%;
  position: relative;
  background: white;
`;

const VoiceContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 50%;
`;

const ButtonContainer = styled.View`
  padding-top: 100px;
`;

export default class Launch extends React.PureComponent {
  navigateToSearchResults = () => {
    this.props.navigation.navigate('SearchResults');
  };

  navigateToAuth = () => {
    this.props.navigation.navigate('Auth');
  };

  render() {
    return (
      <LaunchContainer testID="Home">
        <VoiceContainer>
          <H1 center>Ask For Your Perfect Trip</H1>
          <VoiceRecorder onPress={this.navigateToSearchResults} />

          {/*<ButtonContainer>
            <Button onPress={this.navigateToAuth} title="Login" color="#4fb797" />
          </ButtonContainer>*/}
        </VoiceContainer>
      </LaunchContainer>
    );
  }
}
