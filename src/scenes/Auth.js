import React from 'react';
import styled from 'styled-components';
import { Button, Text, TextInput } from 'react-native';
import Auth0 from 'react-native-auth0';
import decode from 'jwt-decode';

const AuthContainer = styled.View`
  width: 100%;
  height: 100%;
  position: relative;
  background: white;
  padding-top: 100px;
  padding-left: 20px;
  padding-right: 20px;
`;

const auth0 = new Auth0({ domain: 'staging-please.eu.auth0.com', clientId: 'hdP9sSzartSH2lvR2oABAWd0Cq7UUQVv' });

export default class Auth extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  };

  logInWithCredentials = () => {
    auth0
      .auth
      .passwordRealm({username: this.state.username, password: this.state.password, realm: "Username-Password-Authentication"})
      .then((result) => {
        console.log(decode(result.idToken));
      })
      .catch(console.error);
  };

  render() {
    return (
      <AuthContainer testID="Auth">
        <TextInput
          placeholder="E-mail"
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={(value) => this.setState({username: value})}
          value={this.state.username}
        />
        <TextInput
          secureTextEntry={true}
          placeholder="Password"
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 20 }}
          onChangeText={(value) => this.setState({password: value})}
          value={this.state.password}
        />
        <Button title="Log in" onPress={this.logInWithCredentials}/>
      </AuthContainer>
    );
  };
}
