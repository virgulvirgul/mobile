import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Text, TextInput, AsyncStorage } from 'react-native';
import Auth0 from 'react-native-auth0';
import decode from 'jwt-decode';

import { config } from '../../../libs/config'
import * as sessionsActions from './../actions';

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

class LoginContainer extends React.Component {

  constructor() {
    super();
    this.state = {
      email: "",
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
    this.props.loginRequest(this.state.email, this.state.password);
    // this._storeUser(decode(result.idToken));
  };

  render() {
    return (
      <AuthContainer testID="Auth">
        {
          this.props.loginError.message &&
          <Text>{JSON.stringify(this.props.loginError)}</Text>
        }
        <TextInput
          placeholder="E-mail"
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={(value) => this.setState({email: value})}
          value={this.state.email}
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

const mapStateToProps = state => {
  return {
    session: state.SessionsReducer.session,
    loginError: state.SessionsReducer.loginError,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(sessionsActions, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginContainer);
