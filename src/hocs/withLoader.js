import React from 'react';
import Loader from '../components/Loader';

const withLoader = WrappedComponent => (
  ({ isLoading, ...props }) => (isLoading ? <Loader /> : <WrappedComponent {...props} />)
);

export default withLoader;
