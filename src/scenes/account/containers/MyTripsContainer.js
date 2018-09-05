import React from 'react';
import styled from 'styled-components';
import { Button, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { config } from '../../../libs/config';
import * as accountActions from './../actions';

class MyTripsContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <Text>My Trips</Text>
    );
  }
}

const mapStateToProps = state => {
  return {
    myTrips: state.AccountReducer.myTrips,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(accountActions, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MyTripsContainer);
