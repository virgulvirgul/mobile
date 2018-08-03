import React from 'react';
import styled from 'styled-components';
import { FlatList } from 'react-native';
import { H3 } from '.';

const TripItineraryContainer = styled.View`
  margin: 5px;
  background-color: white;
`;

const EventContainer = styled.View`
  elevation: 2;
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
      <EventContainer
        shadowColor="rgba(0, 0, 0, 0.3)"
        shadowOffset={{ width: 0, height: 1 }}
        shadowOpacity={1}
        shadowRadius={2}
      >
        <H3>Thing {item.id}</H3>
        <EventDescription>Here is how to do thing {item.id}</EventDescription>
      </EventContainer>
    );
  };

  render() {
    const events = [
      { id: 1, name: 'sup', color: 'red' },
      { id: 2, name: 'man', color: 'red' },
      { id: 3, name: 'yoo', color: 'red' },
    ];
    return (
      <TripItineraryContainer testID="TripCard">
        <FlatList
          data={events}
          keyExtractor={({ id }) => id.toString()}
          renderItem={this.renderEvent}
        />
      </TripItineraryContainer>
    );
  }
}
