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
import Dasboards from './Pages/Dashboards';
import DetalhesProjeto from './Pages/DetalhesProjeto';
import NotFound from './components/NotFound';

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
            <Routes
              path="/projetos/:id"
              layout={DashLayout}
              component={DetalhesProjeto}
            />
            <Routes path="/projetos" layout={DashLayout} component={Projetos} />

            <Routes
              path="/Dashboards"
              layout={DashLayout}
              component={Dasboards}
            />
            <Routes layout={DashLayout} component={NotFound} />
          </Switch>
        </Wrapper>
        <GlobalStyle />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
