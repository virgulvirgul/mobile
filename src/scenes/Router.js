import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Navbar } from '../components';

import Launch from './Launch';
import SearchResults from './SearchResults';
import Auth from './Auth';

const Router = createStackNavigator(
  {
    Auth: {
      screen: ({ navigation, screenProps }) => {
        return <Auth navigation={navigation} />;
      },
      navigationOptions: ({ navigation, screenProps }) => ({
        headerMode: 'screen',
        header: <Navbar />,
      }),
    },
    Launch: {
      screen: ({ navigation, screenProps }) => {
        return <Launch navigation={navigation} />;
      },
      navigationOptions: ({ navigation, screenProps }) => ({
        headerMode: 'screen',
        header: <Navbar />,
      }),
    },
    SearchResults: {
      screen: ({ navigation, screenProps }) => {
        return <SearchResults />;
      },
      navigationOptions: ({ navigation, screenProps }) => ({
        headerMode: 'screen',
        header: <Navbar />,
      }),
    },
  },
  {
    initialRouteName: 'Launch',
  },
);

export default Router;
