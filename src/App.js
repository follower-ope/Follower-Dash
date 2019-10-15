import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import { Wrapper } from './styles/components';

import Routes from './routes';
import GlobalStyle from './styles/global';

import './config/reactotron';

import DashLayout from './layouts/DashLayout';
import LoginLayout from './layouts/LoginLayout';

import Home from './Pages/Home';
import Usuarios from './Pages/Usuarios';
import Projetos from './Pages/Projetos';
import Login from './Pages/Login';
import produtividade from './Pages/Produtividade';

import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Wrapper>
          <Switch>
            <Routes exact path="/" layout={LoginLayout} component={Login} />
            <Routes path="/login" layout={LoginLayout} component={Login} />
            <Routes path="/home" layout={DashLayout} component={Home} />
            <Routes path="/usuarios" layout={DashLayout} component={Usuarios} />
            <Routes path="/projetos" layout={DashLayout} component={Projetos} />
            <Routes
              path="/produtividade"
              layout={DashLayout}
              component={produtividade}
            />
          </Switch>
        </Wrapper>
        <GlobalStyle />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
