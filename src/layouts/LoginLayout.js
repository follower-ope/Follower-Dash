import React, { useEffect } from 'react';

const LoginLayout = ({ children }) => {
  useEffect(() => {
    if (window.localStorage.getItem('token')) {
      window.location = '/home';
    }
  }, []);

  return <>{children}</>;
};

export default LoginLayout;
