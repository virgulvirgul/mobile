import { config } from './config';

function getLang() {
  return config.DEFAULT_LOCALE;
}

const capitalizeFirstChar = string => string.charAt(0).toUpperCase() + string.slice(1);

export {
  getLang,
  capitalizeFirstChar,
};
