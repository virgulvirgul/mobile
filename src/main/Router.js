import React from 'react';
import {createStackNavigator, createDrawerNavigator} from 'react-navigation';

import LoginContainer from '../scenes/sessions/containers/LoginContainer';
import RegistrationContainer from '../scenes/sessions/containers/RegistrationContainer';
import Launch from '../scenes/Launch';
import SearchResults from '../scenes/SearchResults';
import SearchForm from '../scenes/SearchForm';

const MainNavigator = createDrawerNavigator({
  Login: {
    screen: LoginContainer
  },
  Registration: {
    screen: RegistrationContainer
  },
  Launch: {
    screen: Launch
  },
  SearchResults: {
    screen: SearchResults
  },
  SearchForm: {
    screen: SearchForm
  }
}, {initialRouteName: 'SearchForm'});

const Router = createStackNavigator({
  Main: {
    screen: MainNavigator
  }
}, {
  headerMode: 'none'
}, {initialRouteName: 'Main'});

export default Router;
