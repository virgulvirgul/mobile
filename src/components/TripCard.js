import React from 'react';
import { Dimensions, Button, ScrollView } from 'react-native';
import styled from 'styled-components';
import Image from 'react-native-image-progress';
import ProgressBar from 'react-native-progress/Bar';

import { H2, TripItinerary } from './';

const { height: deviceHeight } = Dimensions.get('window');

const TripCardContainer = styled.View`
  margin: 10px;
  background-color: white;
  border-radius: 5px;
  margin-bottom: 50px;
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
      <TripCardContainer testID="TripCard" height={deviceHeight - 50}>
        <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
          <Image
            source={{ uri: this.props.data.item.media[0].files.large.url }}
            indicator={ProgressBar}
            indicatorProps={{
              color: 'rgba(79, 183, 151, 1)',
            }}
            style={{
              flex: 1,
              height: 200,
            }}
          />
          <CardContent>
            <H2>{this.props.data.item.title['en-us']}</H2>
            <CardDescription>{this.props.data.item.description['en-us']}</CardDescription>
            <TripItinerary data={this.props.data.item.services} />
            <Button title="Book trip" color="#4fb797" onPress={() => alert('booked')} />
          </CardContent>
        </ScrollView>
      </TripCardContainer>
    );
  }
}
