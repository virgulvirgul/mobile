import React from 'react';
import { createStackNavigator } from 'react-navigation';

import Home from './Home';
import { Navbar } from '../components';

const Router = createStackNavigator({
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
      return <Home />;
    },
    navigationOptions: ({ navigation, screenProps }) => ({
      headerMode: 'screen',
      header: <Navbar />,
    }),
  },
});

export default Router;
