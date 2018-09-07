import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { SectionList } from 'react-native';
import CollapsableEvent from './CollapsableEvent';

const TripItineraryContainer = styled.View`
  background-color: white;
  margin: 10px 0;
`;

const EventHeader = styled.Text`
  font-size: 16px;
`;

function mapServicesToDays(services) {
  const servicesByDay = services.reduce((prevObj, service) => {
    const prevValue = prevObj[service.day];

    return {
      ...prevObj,
      [service.day]: [
        ...(prevValue || []),
        service,
      ],
    };
  }, {});

  return Object.keys(servicesByDay).sort().map(key => ({
    title: `Day ${key}`,
    data: servicesByDay[key],
  }));
}

export default class TripItinerary extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      days: mapServicesToDays(props.services),
    };
  }

  renderEventHeader = ({ section }) => (
    <EventHeader>{section.title}</EventHeader>
  )

  renderEvent = ({ item }) => <CollapsableEvent service={item.service} />;

  render() {
    return (
      <TripItineraryContainer testID="TripCard">
        <SectionList
          data={this.props.services}
          keyExtractor={({ _id }) => _id.toString()}
          renderItem={this.renderEvent}
          renderSectionHeader={this.renderEventHeader}
          sections={this.state.days}
        />
      </TripItineraryContainer>
    );
  }
}

TripItinerary.propTypes = {
  services: PropTypes.array.isRequired,
};
