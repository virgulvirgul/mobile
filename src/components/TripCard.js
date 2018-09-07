import React from 'react';
import PropTypes from 'prop-types';
import { Dimensions, ScrollView } from 'react-native';
import styled from 'styled-components';
import Image from 'react-native-image-progress';
import ProgressBar from 'react-native-progress/Bar';
import { getLang } from '../libs/utils';

import { H2, TripItinerary, Button } from '.';

const { height: deviceHeight } = Dimensions.get('window');

const TripCardContainer = styled.View`
  margin: 10px;
  background-color: white;
  margin-bottom: 30px;
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
    const {
      data: { item },
    } = this.props;

    return (
      <TripCardContainer
        testID="TripCard"
        height={deviceHeight - 50}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <Image
            source={{ uri: item.media[0].files.large.url }}
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
            <H2>{item.title[getLang()]}</H2>
            <CardDescription>{item.description[getLang()]}</CardDescription>
            <TripItinerary services={item.services} />
            <Button color="primary" onPress={() => alert("booked")}>
              Book trip
            </Button>
          </CardContent>
        </ScrollView>
      </TripCardContainer>
    );
  }
}

TripCard.propTypes = {
  data: PropTypes.object.isRequired,
};
