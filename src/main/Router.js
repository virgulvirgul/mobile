import React from 'react';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

import LoginContainer from '../scenes/sessions/containers/LoginContainer';
import Launch from '../scenes/Launch';
import SearchResults from '../scenes/SearchResults';
import SearchForm from '../scenes/SearchForm';

const MainNavigator = createDrawerNavigator(
  {
    Login: {
      screen: LoginContainer,
    },
    Launch: {
      screen: Launch,
    },
    SearchResults: {
      screen: SearchResults,
    },
    SearchForm: {
      screen: SearchForm,
    },
  },
  { initialRouteName: 'Launch' },
);

const Router = createStackNavigator(
  {
    Main: {
      screen: MainNavigator,
    },
  },
  {
    headerMode: 'none',
  },
  { initialRouteName: 'Main' },
);

export default Router;
