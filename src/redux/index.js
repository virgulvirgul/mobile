import { connect } from 'react-redux';
import rootSet from './rootSet';

const { actions } = rootSet;

export default function redux(callback = state => state) {
  return function(component) {
    return connect(
      callback,
      actions
    )(component);
  };
}
