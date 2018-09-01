import axios from 'axios';
import validator from 'validator';
import { config } from '../../libs/config';

export const types = {
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_ERROR: 'LOGIN_ERROR',
};

export const sessionsFetched = session => {
  return {
    type: this.types.LOGIN_SUCCESS,
    payload: session,
  };
};

export const setLoginError = payload => {
  return dispatch => {
    dispatch({
      type: types.LOGIN_ERROR,
      payload: {
        code: payload.code,
        message: payload.message,
      },
    });
  };
};

export const getCurrentUser = () => async dispatch => {
  try {
    if (localSession) {
      const jsonUser = JSON.parse(localSession);
      const currentUser = await axios.get(
        `${serverBaseURL}/users/me`,
        { headers: { 'Authorization': `Bearer ${jsonUser.accessToken}`}}
      )
      /*.catch( error => {
        console.log(error);
        // if token is expired :
        // localStorage.removeItem(`please-${env}-session`);
        // history.push('/');
      });*/
      dispatch(sessionsFetched({session: currentUser.data}));
    }
  } catch(error) {
    console.log(error);
  }
};

export const logOut = () => dispatch => {
  dispatch(sessionsFetched({session: {}}));
};

export const loginRequest = (email, password) => {
  return async dispatch => {
    try {
      const auth0Response = await axios.post(
        `${config.API_URL}/users/login`,
        { username: email, password: password },
      ).catch( error => {
        dispatch(setLoginError({code: error.response.data.statusCode, message: error.response.data.message}));
      });
      if (auth0Response) {
        const auth0Token = auth0Response.data.access_token;
        const user = await axios.get(
          `${config.API_URL}/users/me`,
          { headers: {'Authorization': `Bearer ${auth0Token}`} }
        ).catch( error => {
          dispatch(setLoginError({code: error.response.data.statusCode, message: error.response.data.message}));
        });
        if (user) {
          const userData = user.data;
          userData.accessToken = auth0Token;
          dispatch(sessionsFetched({ session: userData }));
        }
      }
    } catch (error) {
      dispatch(setLoginError({code: 401, message: error.message}));
    }
  };
};
