import React from 'react';
import styled from 'styled-components';
import { Button, Text, TextInput, AsyncStorage } from 'react-native';
import Auth0 from 'react-native-auth0';
import decode from 'jwt-decode';
import { config } from '../libs/config'

const AuthContainer = styled.View`
  width: 100%;
  height: 100%;
  position: relative;
  background: white;
  padding-top: 100px;
  padding-left: 20px;
  padding-right: 20px;
`;

const auth0 = new Auth0({ domain: config.AUTH0_DOMAIN, clientId: config.AUTH0_CLIENT_ID });

export default class Auth extends React.Component {

  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      user: null
    };
  };

  _storeUser = async (user) => {
    try {
      await AsyncStorage.setItem('user', JSON.stringify(user));
    }  catch (error) {
      console.log(error);
    }
  }

  _retrieveUser = async () => {
    try {
      const user = await AsyncStorage.getItem('user');
      if (user !== null) {
        return JSON.parse(user);
      }

      return null;
     } catch (error) {
       console.log(error);
     }
  }

  logInWithCredentials = () => {
    auth0
      .auth
      .passwordRealm({username: this.state.username, password: this.state.password, realm: "Username-Password-Authentication"})
      .then((result) => {
        this._storeUser(decode(result.idToken));
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
