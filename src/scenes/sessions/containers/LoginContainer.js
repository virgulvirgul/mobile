import React from 'react';
import styled from 'styled-components';
import { Button, Text, TextInput, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { config } from '../../../libs/config';
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

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      user: null,
    };
  }

  logInWithCredentials = () => {
    this.props.loginRequest(this.state.email, this.state.password, this.props.navigation);
  };

  render() {
    return (
      <AuthContainer testID="Auth">
        {this.props.loginError.message && <Text>{JSON.stringify(this.props.loginError)}</Text>}
        <TextInput
          placeholder="E-mail"
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={value => this.setState({ email: value })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry={true}
          placeholder="Password"
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 20 }}
          onChangeText={value => this.setState({ password: value })}
          value={this.state.password}
        />
        <Button title="Log in" onPress={this.logInWithCredentials} />
      </AuthContainer>
    );
  }
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
