import React from 'react';
import { Dimensions, Button, ScrollView } from 'react-native';
import styled from 'styled-components';

import { H2, TripItinerary } from './';

const { height: deviceHeight } = Dimensions.get('window');

const TripCardContainer = styled.View`
  elevation: 2;
  margin: 10px;
  background-color: white;
  border-radius: 5px;
  margin-bottom: 50px;
`;

const CardImage = styled.Image`
  flex: 1;
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
        height={deviceHeight - 100}
      >
        <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <CardImage source={{ uri: this.props.data.item.media[0].files.large.url }} />
        <CardContent>
          <H2>{this.props.data.item.title['en-us']}</H2>
          <CardDescription>{this.props.data.item.description['en-us']}</CardDescription>
          <TripItinerary data={this.props.data.item.services} />
          <Button title="Book trip" color="#4fb797" onPress={() => alert("booked")} />
        </CardContent>
        </ScrollView>
      </TripCardContainer>
    );
  }
}
