import React from 'react';
import { StatusBar, Text } from 'react-native';

import { Container } from '../components';
import Router from './Router';

import SwipeUpDown from 'react-native-swipe-up-down';

export default class Root extends React.PureComponent {
  render() {
    return (
      <Container>
        <StatusBar backgroundColor="#dddddd" barStyle="light-content" />
        <Router />
        <SwipeUpDown
          swipeHeight={60}
          itemFull={<Text>Search Filters:</Text>} // Pass props component when show full
          onShowMini={() => console.log('mini')}
          onShowFull={() => console.log('full')}
          onMoveDown={() => console.log('down')}
          onMoveUp={() => console.log('up')}
          disablePressToShow={false} // Press item mini to show full
          style={{ backgroundColor: 'white' }}
        />
      </Container>
    );
  }
}
