import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import { Wrapper } from './styles/components';

import Routes from './routes';
import GlobalStyle from './styles/global';

import DashLayout from './layouts/DashLayout';
import LoginLayout from './layouts/LoginLayout';

import Home from './Pages/Home';
import Usuarios from './Pages/Usuarios';
import Login from './Pages/Login';
import produtividade from './Pages/Produtividade';

const App = () => {
  return (
    <BrowserRouter>
      <Wrapper>
        <Switch>
          <Routes exact path="/" layout={LoginLayout} component={Login} />
          <Routes path="/login" layout={LoginLayout} component={Login} />
          <Routes path="/home" layout={DashLayout} component={Home} />
          <Routes path="/usuarios" layout={DashLayout} component={Usuarios} />
          <Routes
            path="/produtividade"
            layout={DashLayout}
            component={produtividade}
          />
        </Switch>
      </Wrapper>
      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;
