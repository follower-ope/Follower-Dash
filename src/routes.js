import React from 'react';

import { Route } from 'react-router-dom';

const Routes = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />
);

export default Routes;
