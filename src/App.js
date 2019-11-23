import React from 'react';
import ReactNotification from 'react-notifications-component';
import { BrowserRouter, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import { Wrapper } from './styles/components';

import Routes from './routes';
import GlobalStyle from './styles/global';

import './config/reactotron';

import DashLayout from './layouts/DashLayout';
import LoginLayout from './layouts/LoginLayout';

import Home from './Pages/Home';
import Users from './Pages/Users';
import Projects from './Pages/Projects';
import Login from './Pages/Login';
import Dasboards from './Pages/Dashboards';
import ProjectDetails from './Pages/ProjectDetails';
import Softwares from './Pages/Softwares';
import NotFound from './components/NotFound';

import store from './store';

import 'react-notifications-component/dist/theme.css';

const App = () => {
  return (
    <Provider store={store}>
      <ReactNotification />
      <BrowserRouter>
        <Wrapper>
          <Switch>
            <Routes exact path="/" layout={LoginLayout} component={Login} />
            <Routes path="/login" layout={LoginLayout} component={Login} />
            <Routes path="/home" layout={DashLayout} component={Home} />
            <Routes path="/usuarios" layout={DashLayout} component={Users} />
            <Routes
              path="/projetos/:id"
              layout={DashLayout}
              component={ProjectDetails}
            />
            <Routes path="/projetos" layout={DashLayout} component={Projects} />
            <Routes
              path="/softwares"
              layout={DashLayout}
              component={Softwares}
            />
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
