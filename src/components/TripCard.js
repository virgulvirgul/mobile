import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components';
import Carousel from 'react-native-snap-carousel';

import { H2, TripItinerary } from './';

const { width: deviceWidth } = Dimensions.get('window');

const TripCardContainer = styled.View`
  elevation: 2;
  margin: 10px;
  background-color: white;
  border-radius: 5px;
`;

const CardImage = styled.Image`
  width: 300px;
  height: 200px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  overflow: hidden;
`;

const CardContent = styled.View`
  padding: 10px;
`;

const CardDescription = styled.Text`
  font-size: 12px;
  color: #aaa;
`;

const Crumb = styled.View`
  height: 20px;
  background-color: orange;
  padding: 5px;
`;

const CrumbText = styled.Text`
  font-size: 12px;
`;

export default class TripCard extends React.PureComponent {
  renderCrumb = () => {
    return (
      <Crumb>
        <CrumbText>sup</CrumbText>
      </Crumb>
    );
  };

  render() {
    const crumbs = [
      { name: 'sup', color: 'red' },
      { name: 'man', color: 'red' },
      { name: 'yoo', color: 'red' },
    ];
    return (
      <TripCardContainer
        testID="TripCard"
        shadowColor="rgba(0, 0, 0, 0.3)"
        shadowOffset={{ width: 0, height: 1 }}
        shadowOpacity={1}
        shadowRadius={2}
      >
        <CardImage source={{ uri: 'https://picsum.photos/458/354' }} />
        <CardContent>
          <H2>TripCard</H2>
          <CardDescription>
            What up man how does it go and stuff
          </CardDescription>
          {/* <Carousel
            data={crumbs}
            renderItem={this.renderCrumb}
            sliderWidth={100}
            itemWidth={30}
            inactiveSlideScale={1}
          /> */}
          <TripItinerary />
        </CardContent>
      </TripCardContainer>
    );
  }
}
