import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Dimensions, Button, ScrollView } from 'react-native';
import styled from 'styled-components';
import Image from 'react-native-image-progress';
import ProgressBar from 'react-native-progress/Bar';

import { H2, TripItinerary } from '.';

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

class TripCard extends React.PureComponent {
  render() {
    const {
      data: { item },
      language,
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
            <H2>{item.title[language]}</H2>
            <CardDescription>{item.description[language]}</CardDescription>
            <TripItinerary services={item.services} />
            <Button title="Book trip" color="#4fb797" onPress={() => alert("booked")} />
          </CardContent>
        </ScrollView>
      </TripCardContainer>
    );
  }
}

TripCard.propTypes = {
  data: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  language: state.settings.language,
});

export default connect(
  mapStateToProps,
)(TripCard);
