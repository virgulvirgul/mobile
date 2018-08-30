import React from 'react';
import {StackNavigator, DrawerNavigator} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';

import Launch from './Launch';
import SearchResults from './SearchResults';
import Auth from './Auth';

const MainNavigator = DrawerNavigator({
  Auth: {
    screen: Auth
  },
  Launch: {
    screen: Launch
  },
  SearchResults: {
    screen: SearchResults
  }
}, {initialRouteName: 'Launch'});

const Router = StackNavigator({
  Main: {
    screen: MainNavigator
  }
}, {
  headerMode: 'none'
}, {initialRouteName: 'Main'});

export default Router;
