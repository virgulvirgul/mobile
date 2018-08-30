import React from 'react';
import {createStackNavigator, createDrawerNavigator} from 'react-navigation';

import Auth from './Auth';
import Launch from './Launch';
import SearchResults from './SearchResults';
import SearchForm from './SearchForm';

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
