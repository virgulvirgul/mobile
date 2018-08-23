import React from 'react';
import styled from 'styled-components';
import { Dimensions, Text } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { Fetch } from 'react-data-fetching';
import Loader from '../components/Loader';
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
  margin-top: 50px;
`;

const { width: deviceWidth } = Dimensions.get('window');

export default class Onboarding extends React.PureComponent {
  renderItem = item => {
    return <TripCard data={item} />;
  };

  render() {
    return (
      <SearchResultsContainer>
        <Fetch
          loader={<Loader />}
          url="https://staging-api.please.com/search"
          timeout={5000}
        >
          {({ data }) => (
            <CardsContainer>
              <Carousel
                data={data}
                renderItem={this.renderItem}
                sliderWidth={deviceWidth}
                itemWidth={320}
                itemHeight={200}
                inactiveSlideScale={1}
              />
            </CardsContainer>
          )}
        </Fetch>
      </SearchResultsContainer>
    );
  }
}
