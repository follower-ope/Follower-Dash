import React from 'react';
import ReactNotification from 'react-notifications-component';
import Routes from './routes';
import GlobalStyle from './styles/global';

import { Provider } from 'react-redux';

import './config/reactotron';
import store from './store';
import 'react-notifications-component/dist/theme.css';

const App = () => {
  return (
    <Provider store={store}>
      <ReactNotification />
      <Routes />
      <GlobalStyle />
    </Provider>
  );
};

export default App;
