import axios from 'axios';
import validator from 'validator';
import config from '../../libs/config';

export const types = {
  SESSION_SUCCESS: 'SESSION_SUCCESS',
  SESSION_ERROR: 'SESSION_ERROR',
};

export const sessionFetched = session => {
  return {
    type: types.SESSION_SUCCESS,
    payload: session,
  };
};

export const setSessionError = payload => {
  return {
    type: types.SESSION_ERROR,
    payload: {
      code: payload.code,
      message: payload.message,
    },
  };
};

export const logOut = () => async dispatch => {
  try {
    await AsyncStorage.removeItem('user');
    dispatch(sessionFetched({ session: {} }));
  } catch (error) {
    console.log(error);
  }
};

export const loginRequest = (email, password, navigation) => {
  return async dispatch => {
    try {
      const auth0Response = await axios
        .post(`${config.API_URL}/users/login`, { username: email, password: password })
        .catch(error => {
          dispatch(
            setSessionError({
              code: error.response.status,
              message: error.response.data.error_description,
            }),
          );
        });
      if (auth0Response) {
        const jwtToken = auth0Response.data.access_token;
        const user = await axios
          .get(`${config.API_URL}/users/me`, { headers: { Authorization: `Bearer ${jwtToken}` } })
          .catch(error => {
            dispatch(
              setSessionError({
                code: error.response.status,
                message: error.response.data.error_description,
              }),
            );
          });
        if (user) {
          const userData = user.data;
          userData.accessToken = jwtToken;
          dispatch(sessionFetched({ session: userData }));
          storeUser(userData);
          navigation.navigate('SearchForm');
        }
      }
    } catch (error) {
      dispatch(setSessionError({ code: 401, message: error.message }));
    }
  };
};

export const registrationRequest = (username, email, password, navigation) => {
  return async dispatch => {
    try {
      axios
        .post(`${config.API_URL}/users/signup`, {
          username: username,
          email: email,
          password: password,
        })
        .then(async res => {
          try {
            const auth0Response = await axios
              .post(`${config.API_URL}/users/login`, { username: email, password: password })
              .catch(error => {
                dispatch(
                  setSessionError({
                    code: error.response.data.statusCode,
                    message: error.response.data.message,
                  }),
                );
              });
            if (auth0Response) {
              const jwtToken = auth0Response.data.access_token;
              const user = await axios
                .get(`${config.API_URL}/users/me`, {
                  headers: { Authorization: `Bearer ${jwtToken}` },
                })
                .catch(error => {
                  dispatch(
                    setSessionError({
                      code: error.response.data.statusCode,
                      message: error.response.data.message,
                    }),
                  );
                });
              if (user) {
                const userData = user.data;
                userData.accessToken = jwtToken;
                dispatch(sessionFetched({ session: userData }));
                storeUser(userData);
                navigation.navigate('SearchForm');
              }
            }
          } catch (error) {
            dispatch(setSessionError({ error: { message: error } }));
          }
        })
        .catch(error => {
          dispatch(
            setSessionError({
              code: error.response.data.statusCode,
              message: error.response.data.description,
            }),
          );
        });
    } catch (error) {
      dispatch(setSessionError({ code: 401, message: error.message }));
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
      const currentUser = await axios.get(`${serverBaseURL}/users/me`, {
        headers: { Authorization: `Bearer ${jsonUser.accessToken}` },
      });
      /*.catch( error => {
        console.log(error);
        // if token is expired :
        // await AsyncStorage.removeItem(`user`);
      });*/
      dispatch(sessionFetched({ session: currentUser.data }));
    }
  } catch (error) {
    console.log(error);
  }
};

const storeUser = async user => {
  try {
    await AsyncStorage.setItem('user', JSON.stringify(user));
  } catch (error) {
    console.log(error);
  }
};
