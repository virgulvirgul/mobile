import React from 'react';
import styled from 'styled-components';
import { Button, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { H1, VoiceRecorder } from '../../../components';
import config from '../../../libs/config';
import * as searchResultsActions from './../actions';

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

class VoiceSearchContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = { };
  }

  navigateToSearchResults = () => {
    this.props.navigation.navigate('SearchResults');
  };

  render() {
    return (
      <LaunchContainer testID="Home">
        <VoiceContainer>
          <H1 center>Ask For Your Perfect Trip</H1>
          <VoiceRecorder onPress={this.navigateToSearchResults} />
        </VoiceContainer>
      </LaunchContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    results: state.SearchResultsReducer.results,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(searchResultsActions, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VoiceSearchContainer);
