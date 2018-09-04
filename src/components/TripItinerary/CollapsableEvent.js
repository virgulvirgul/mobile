import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import { H3 } from '..';

const EventContainer = styled.View`
  padding: 10px;
  border-radius: 10px;
  flex-direction: row;
  elevation: 1;
  margin: 10px 0;
`;

const Type = styled.Text`
  font-size: 14px;
  color: #d3d3d6;
`;

const Content = styled.View`
  flex: 1;
`;

const InsideContent = styled.View`
  margin-top: 15px;
`;

const Line = styled.View`
  flex-direction: row;
  margin-vertical: 5px;
`;

const IconLabel = styled.Text`
  font-weight: 900;
  margin-left: 5px;
`;

const iconStyles = StyleSheet.create({
  collapsed: {
    color: '#d3d3d6',
  },
  expanded: {
    color: 'black',
  },
});

const lang = 'en-us';

export default class CollapsableEvent extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse = () => {
    this.setState(prevState => ({
      collapsed: !prevState.collapsed,
    }));
  }

  renderDetails = () => {
    if (this.state.collapsed) {
      return null;
    }

    return (
      <InsideContent>
        <Line>
          <Icon name="clock" size={20} style={iconStyles.collapsed} />
          <IconLabel>After 7:00 pm</IconLabel>
        </Line>
        <Line>
          <Icon name="map-marker" size={20} style={iconStyles.collapsed} />
          <IconLabel>1092 Southern Street, NY, 10011</IconLabel>
        </Line>
        <Line>
          <Icon name="phone" size={20} style={iconStyles.collapsed} />
          <IconLabel>After 7:00 pm</IconLabel>
        </Line>
      </InsideContent>
    );
  }

  render() {
    const { service } = this.props;
    const { collapsed } = this.state;

    return (
      <TouchableWithoutFeedback onPress={this.toggleCollapse}>
        <EventContainer onLayout={this.onLayout}>
          <Content>
            <Type>
              <Icon name="weather-night" size={20} style={iconStyles.collapsed} />
              PLACE
            </Type>
            <H3>{service.title[lang]}</H3>
            {this.renderDetails()}
          </Content>
          { collapsed
            ? <Icon name="chevron-right" size={20} style={iconStyles.collapsed} />
            : <Icon name="chevron-down" size={20} style={iconStyles.expanded} />
          }
        </EventContainer>
      </TouchableWithoutFeedback>
    );
  }
}

CollapsableEvent.propTypes = {
  service: PropTypes.object.isRequired,
};
