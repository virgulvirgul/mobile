import React from 'react';
import styled from 'styled-components';
import { Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { Fetch } from 'react-data-fetching';
import TripCard from '../../../components/TripCard';

const SearchResultsWrapper = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 100%;
  position: relative;
  background: white;
`;

const CardsWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 10px;
`;

const { width: deviceWidth } = Dimensions.get('window');

export default class SearchResultsContainer extends React.PureComponent {
  renderItem = item => <TripCard data={item} />;

  render() {
    const { getParam } = this.props.navigation;
    const tags = getParam('tags');
    const lat = getParam('lat');
    const lng = getParam('lng');

    const params = {
      ...(tags ? { tags } : tags),
      ...(lat ? { lat } : lat),
      ...(lng ? { lng } : lng),
    };

    return (
      <SearchResultsWrapper>
        <Fetch path="/search" params={params}>
          {({ data }) => (
            <CardsWrapper>
              <Carousel
                data={data.trips}
                renderItem={this.renderItem}
                sliderWidth={deviceWidth}
                itemWidth={deviceWidth - 50}
                inactiveSlideScale={1}
              />
            </CardsWrapper>
          )}
        </Fetch>
      </SearchResultsWrapper>
    );
  }
}
