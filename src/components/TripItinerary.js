import React from 'react';
import styled from 'styled-components';
import { FlatList } from 'react-native';
import { H3 } from '.';

const TripItineraryContainer = styled.View`
  margin: 5px;
  background-color: white;
`;

const EventContainer = styled.View`
  padding: 10px;
  margin: 5px;
  flex: 1;
  background-color: white;
`;

const EventDescription = styled.Text`
  font-size: 12px;
  color: #aaa;
`;

export default class TripItinerary extends React.PureComponent {
  renderEvent = ({ item }) => {
    return (
      <EventContainer>
        <H3>{item.service.title['en-us']}</H3>
        <EventDescription>{item.service.description['en-us']}</EventDescription>
        <H3>
          Price: {item.service.baseCurrency.symbol}
          {item.service.basePrice}
        </H3>
      </EventContainer>
    );
  };

  render() {
    return (
      <TripItineraryContainer testID="TripCard">
        <FlatList
          data={this.props.data}
          keyExtractor={({ _id }) => _id.toString()}
          renderItem={this.renderEvent}
        />
      </TripItineraryContainer>
    );
  }
}
