import React from 'react';
import styled from 'styled-components';

const Container = styled.View``;

const VoiceDot = styled.View`
  width: 100px;
  height: 100px;
  background-color: green;
  border-radius: 50px;
`;

export default class VoiceRecorder extends React.PureComponent {
  render() {
    return (
      <Container testID="VoiceRecorder">
        <VoiceDot />
      </Container>
    );
  }
}
