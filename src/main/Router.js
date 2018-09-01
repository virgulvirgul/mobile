import React from 'react';
import {createStackNavigator, createDrawerNavigator} from 'react-navigation';

import Auth from '../scenes/Auth';
import Launch from '../scenes/Launch';
import SearchResults from '../scenes/SearchResults';
import SearchForm from '../scenes/SearchForm';

const MainNavigator = createDrawerNavigator({
  Auth: {
    screen: Auth
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
