import React from 'react';
import styled from 'styled-components';
import { Dimensions, LayoutAnimation } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import { H1, Swiper, TripCard, VoiceRecorder } from '../components';

const HomeContainer = styled.View`
  width: 200%;
  display: flex;
  flex-direction: row;
  height: 100%;
  position: relative;
`;

const VoiceContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 50%;
`;

const CardsContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  width: 50%;
`;

// const TripCardScroll = styled.ScrollView.attrs({
//   contentContainerStyle: props => {
//     return {
//       flex: 1,
//     }
//   }
// })``;

const { width: deviceWidth } = Dimensions.get('window');

export default class Home extends React.PureComponent {
  state = { step: 0 };

  pan = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({ step: 1 });
  };

  renderItem = item => {
    return <TripCard />;
  };

  render() {
    const offset = { left: -(this.state.step * deviceWidth) };
    const trips = [{ name: 1 }, { name: 1 }, { name: 1 }, { name: 1 }];

    return (
      <HomeContainer testID="Home" style={offset}>
        <VoiceContainer>
          <H1 center>Please, Ask For Your Perfect Trip</H1>
          <VoiceRecorder onPress={this.pan} />
        </VoiceContainer>

        <CardsContainer>
          <Carousel
            data={trips}
            renderItem={this.renderItem}
            sliderWidth={deviceWidth}
            itemWidth={320}
            itemHeight={200}
            inactiveSlideScale={1}
          />
        </CardsContainer>
      </HomeContainer>
    );
  }
}
