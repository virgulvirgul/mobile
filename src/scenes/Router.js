import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Navbar } from '../components';

import Home from './Home';
import SearchResults from './SearchResults';
import Auth from './Auth';

const Router = createStackNavigator(
  {
    // Splash: {
    //   screen: Splash,
    //   navigationOptions: { header: null },
    // },
    Auth: {
      screen: ({ navigation, screenProps }) => {
        return <Auth navigation={navigation} />;
      },
      navigationOptions: ({ navigation, screenProps }) => ({
        headerMode: 'screen',
        header: <Navbar />,
      }),
    },
    // Onboarding: {
    //   screen: Onboarding,
    //   navigationOptions: { header: null },
    // },
    Home: {
      screen: ({ navigation, screenProps }) => {
        return <Home navigation={navigation} />;
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
    initialRouteName: 'Auth',
  },
);

export default Router;
