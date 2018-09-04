import { AsyncStorage } from 'react-native';

const types = {
  SET_LANGUAGE: 'SET_LANGUAGE',
};

const saveLanguage = async (language) => {
  try {
    await AsyncStorage.setItem('lang', language);
  } catch (error) {
    console.error(error);
  }
};


const setLanguage = session => ({
  type: types.LOGIN_SUCCESS,
  payload: session,
});

export default {
  types,
  setLanguage,
};
