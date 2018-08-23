import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Navbar } from '../components';

import Home from './Home';
import SearchResults from './SearchResults';

const Router = createStackNavigator(
  {
    // Splash: {
    //   screen: Splash,
    //   navigationOptions: { header: null },
    // },
    // Auth: { screen: Auth },
    // Onboarding: {
    //   screen: Onboarding,
    //   navigationOptions: { header: null },
    // },
    Main: {
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
    initialRouteName: 'SearchResults',
  }
);

export default Router;
