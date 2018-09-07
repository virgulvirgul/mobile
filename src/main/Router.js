import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

import LoginContainer from '../scenes/sessions/containers/LoginContainer';
import RegistrationContainer from '../scenes/sessions/containers/RegistrationContainer';
import SearchResultsContainer from '../scenes/searchResults/containers/SearchResultsContainer';
import SearchFormContainer from '../scenes/search/containers/SearchFormContainer';
import VoiceSearchContainer from '../scenes/searchResults/containers/VoiceSearchContainer';
import MyTripsContainer from '../scenes/account/containers/MyTripsContainer';

const MainNavigator = createDrawerNavigator(
  {
    Login: {
      screen: LoginContainer,
    },
    Registration: {
      screen: RegistrationContainer,
    },
    SearchResults: {
      screen: SearchResultsContainer,
    },
    SearchForm: {
      screen: SearchFormContainer,
    },
    VoiceSearch: {
      screen: VoiceSearchContainer,
    },
    MyTrips: {
      screen: MyTripsContainer,
    },
  },
  { initialRouteName: 'VoiceSearch' },
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
