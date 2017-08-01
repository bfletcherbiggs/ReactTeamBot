import React from 'react';
import { Route } from 'react-router';

import Root from './App/Root';

const Routes = () => {
  return (
    <Route path="/" component={Root} />
  );
};

export default Routes;
