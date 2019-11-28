import React from 'react';
import { Redirect } from 'react-router-dom';

const LoginLayout = ({ children }) => {
  const logged = window.localStorage.getItem('token');
  return <>{logged ? <Redirect to={{ pathname: '/' }} /> : children}</>;
};

export default LoginLayout;
