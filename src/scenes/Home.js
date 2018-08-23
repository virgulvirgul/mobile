import React from 'react';
import styled from 'styled-components';
import { Dimensions, LayoutAnimation, Button, Text, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { Fetch } from 'react-data-fetching';
import { Loader } from '../components';

import { H1, Swiper, TripCard, VoiceRecorder } from '../components';

const HomeContainer = styled.View`
  width: 200%;
  display: flex;
  flex-direction: row;
  height: 100%;
  position: relative;
  background: white;
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
  margin-top: 50px;
`;

const ButtonContainer = styled.View`
  padding-top: 100px;
`;

const RegisterButton = styled.Text`
  margin-top: 30px;
  text-decoration: underline;
  color: #4fb797;
  font-size: 15px;
`;

const { width: deviceWidth } = Dimensions.get('window');

export default class Home extends React.PureComponent {
  state = { step: 0 };

  pan = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    this.setState({ step: 1 });
  };

  renderItem = item => {
    return <TripCard data={item} />;
  };

  render() {
    const offset = { left: -(this.state.step * deviceWidth) };
    const trips = [{ name: 1 }, { name: 1 }, { name: 1 }, { name: 1 }];

    return (
      <HomeContainer testID="Home" style={offset}>
        <VoiceContainer>
          <H1 center>Ask For Your Perfect Trip</H1>
          <VoiceRecorder onPress={this.pan} />

          <ButtonContainer>
            <Button onPress={this.pan} title="Login" color="#4fb797" />

            <RegisterButton>Create your account</RegisterButton>
          </ButtonContainer>
        </VoiceContainer>

        <Fetch
          loader={<Text>lalala</Text>}
          url="https://staging-api.please.com/search"
          timeout={5000}
        >
          {({ data }) => (
            <CardsContainer>
              <Carousel
                data={data}
                renderItem={this.renderItem}
                sliderWidth={deviceWidth}
                itemWidth={320}
                itemHeight={200}
                inactiveSlideScale={1}
              />
            </CardsContainer>
          )}
        </Fetch>
      </HomeContainer>
    );
  }
}
