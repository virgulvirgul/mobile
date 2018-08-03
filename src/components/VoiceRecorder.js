import React from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const Container = styled.View``;

const VoiceDot = styled.TouchableHighlight`
  width: 100px;
  height: 100px;
  background-color: #4fb797;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
`;

export default class VoiceRecorder extends React.PureComponent {
  render() {
    const { onPress } = this.props;
    return (
      <Container testID="VoiceRecorder">
        <VoiceDot onPress={onPress}>
          <Icon name="microphone" size={35} style={{ color: 'white' }} />
        </VoiceDot>
      </Container>
    );
  }
}
