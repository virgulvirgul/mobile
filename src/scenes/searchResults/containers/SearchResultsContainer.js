import React from 'react';
import styled from 'styled-components';
import { Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { connect } from 'react-redux';
import withLoader from '../../../hocs/withLoader';
import TripCard from '../../../components/TripCard';
import { H2 } from '../../../components';

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

class SearchResultsContainer extends React.PureComponent {
  renderItem = item => <TripCard data={item} />;

  render() {
    const { data } = this.props;

    if (data.trips.length === 0) {
      return <CardsWrapper><H2>No results found</H2></CardsWrapper>;
    }

    return (
      <SearchResultsWrapper>
        <CardsWrapper>
          <Carousel
            data={data.trips}
            renderItem={this.renderItem}
            sliderWidth={deviceWidth}
            itemWidth={deviceWidth - 50}
            inactiveSlideScale={1}
          />
        </CardsWrapper>
      </SearchResultsWrapper>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.search.isLoading,
  data: state.search.data,
});

export default connect(
  mapStateToProps,
)(withLoader(SearchResultsContainer));
