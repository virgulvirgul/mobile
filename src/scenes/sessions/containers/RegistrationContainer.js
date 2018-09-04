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

class RegistrationContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      user: null,
    };
  }

  register = () => {
    this.props.registrationRequest(
      this.state.username,
      this.state.email,
      this.state.password,
      this.props.navigation,
    );
  };

  render() {
    return (
      <AuthContainer testID="Auth">
        {this.props.sessionError.message && <Text>{JSON.stringify(this.props.sessionError)}</Text>}
        <TextInput
          placeholder="Username"
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={value => this.setState({ username: value })}
          value={this.state.username}
        />
        <TextInput
          placeholder="E-mail"
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 20 }}
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
        <Button title="Register" onPress={this.register} />
      </AuthContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    session: state.SessionsReducer.session,
    sessionError: state.SessionsReducer.sessionError,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(sessionsActions, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegistrationContainer);
