import React from 'react';
import { Provider } from 'react-redux';

import createStore from '../redux/store.js';
import initialState from '../redux/initialState';
import Root from './Root.js';

const store = createStore(initialState);

export default class RootProvider extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}
