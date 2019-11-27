import React from 'react';

import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({
  component: Component,
  layout: Layout,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};

export const PrivateRoute = ({
  component: Component,
  layout: Layout,
  ...rest
}) => {
  const logged = window.localStorage.getItem('token') ? true : false;
  return (
    <Route
      {...rest}
      render={props =>
        logged ? (
          <Layout>
            <Component {...props} />
          </Layout>
        ) : (
          <Redirect to={{ pathname: '/login' }} />
        )
      }
    />
  );
};
