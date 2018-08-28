import React from 'react';
import styled from 'styled-components';
import { Button, Text, TextInput } from 'react-native';

const AuthContainer = styled.View`
  width: 100%;
  height: 100%;
  position: relative;
  background: white;
  padding-top: 100px;
  padding-left: 20px;
  padding-right: 20px;
`;

export default class Auth extends React.PureComponent {
  render() {
    return (
      <AuthContainer testID="Auth">
        <TextInput
          placeholder="E-mail"
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        />
        <TextInput
          secureTextEntry={true}
          placeholder="Password"
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 20 }}
        />
        <Button title="Log in" />
      </AuthContainer>
    );
  }
}
