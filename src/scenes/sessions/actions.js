import axios from 'axios';
import validator from 'validator';
import { config } from '../../libs/config';

export const types = {
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_ERROR: 'LOGIN_ERROR',
};

export const sessionFetched = session => {
  return {
    type: this.types.LOGIN_SUCCESS,
    payload: session,
  };
};

export const setLoginError = payload => {
  return {
    type: types.LOGIN_ERROR,
    payload: {
      code: payload.code,
      message: payload.message,
    },
  };
};

export const logOut = () => async dispatch => {
  try {
    await AsyncStorage.removeItem('user');
    dispatch(sessionFetched({session: {}}));
  } catch (error) {
    console.log(error);
  }
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
          dispatch(sessionFetched({ session: userData }));
          storeUser(userData);
        }
      }
    } catch (error) {
      dispatch(setLoginError({code: 401, message: error.message}));
    }
  };
};

export const getUser = async () => {
  try {
    const user = await AsyncStorage.getItem('user');
    if (user !== null) {
      return JSON.parse(user);
    }
    return null;
  } catch (error) {
    console.log(error);
  }
};

export const fetchUser = () => async dispatch => {
  try {
    const localSession = await AsyncStorage.getItem('user');
    if (localSession) {
      const jsonUser = JSON.parse(localSession);
      const currentUser = await axios.get(
        `${serverBaseURL}/users/me`,
        { headers: { 'Authorization': `Bearer ${jsonUser.accessToken}`}}
      )
      /*.catch( error => {
        console.log(error);
        // if token is expired :
        // await AsyncStorage.removeItem(`user`);
      });*/
      dispatch(sessionFetched({session: currentUser.data}));
    }
  } catch(error) {
    console.log(error);
  }
};

const storeUser = async (user) => {
  try {
    await AsyncStorage.setItem('user', JSON.stringify(user));
  } catch (error) {
    console.log(error);
  }
};
