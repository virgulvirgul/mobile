import React from 'react';
import styled from 'styled-components';
import { Dimensions, Text } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { Fetch } from 'react-data-fetching';
import TripCard from '../components/TripCard';

const SearchResultsContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 100%;
  position: relative;
  background: white;
`;

const CardsContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 10px;
`;

const { width: deviceWidth } = Dimensions.get('window');

export default class Onboarding extends React.PureComponent {
  renderItem = item => {
    return <TripCard data={item} />;
  };

  render() {
    return (
      <SearchResultsContainer>
        <Fetch path="/search">
          {({ data }) => (
            <CardsContainer>
              <Carousel
                data={data.trips}
                renderItem={this.renderItem}
                sliderWidth={deviceWidth}
                itemWidth={deviceWidth - 50}
                inactiveSlideScale={1}
              />
            </CardsContainer>
          )}
        </Fetch>
      </SearchResultsContainer>
    );
  }
}
