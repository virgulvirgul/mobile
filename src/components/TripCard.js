import React from 'react';
import { Dimensions, Button } from 'react-native';
import styled from 'styled-components';

import { H2, TripItinerary } from './';

const { width: deviceWidth } = Dimensions.get('window');

const TripCardContainer = styled.View`
  elevation: 2;
  margin: 10px;
  background-color: white;
  border-radius: 5px;
  margin-bottom: 50px;
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
  render() {
    return (
      <TripCardContainer
        testID="TripCard"
        shadowColor="rgba(0, 0, 0, 0.3)"
        shadowOffset={{ width: 0, height: 1 }}
        shadowOpacity={1}
        shadowRadius={2}
      >
        <CardImage source={{ uri: this.props.data.item.media[0].files.large.url }} />
        <CardContent>
          <H2>{this.props.data.item.title['en-us']}</H2>
          <CardDescription>{this.props.data.item.description['en-us']}</CardDescription>
          <TripItinerary data={this.props.data.item.services}/>
          <Button title="Book trip" color="#4fb797"/>
        </CardContent>
      </TripCardContainer>
    );
  }
}
