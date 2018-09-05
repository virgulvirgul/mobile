import { config } from './config';

function getLang() {
  return config.DEFAULT_LOCALE;
}

export {
  getLang,
};
