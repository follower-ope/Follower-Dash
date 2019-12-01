import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import { Wrapper } from './styles/components';
import DashLayout from './layouts/DashLayout';
import LoginLayout from './layouts/LoginLayout';

import Home from './Pages/Home';
import Users from './Pages/Users';
import UserDetails from './Pages/UserDetails';
import Projects from './Pages/Projects';
import Login from './Pages/Login';
import Dasboards from './Pages/Dashboards';
import ProjectDetails from './Pages/ProjectDetails';
import Softwares from './Pages/Softwares';
import Profiles from './Pages/Profiles';
import UsersActivities from './Pages/UsersActivities';
import NotFound from './components/NotFound';

import { PublicRoute, PrivateRoute } from './components/Route';

const Routes = () => {
  const logged = window.localStorage.getItem('token');
  return (
    <BrowserRouter>
      <Wrapper>
        <Switch>
          <PublicRoute
            exact
            path="/"
            layout={logged ? DashLayout : LoginLayout}
            component={logged ? Home : Login}
          />
          <PublicRoute path="/login" layout={LoginLayout} component={Login} />
          <PrivateRoute path="/home" layout={DashLayout} component={Home} />

          <PrivateRoute
            path="/usuarios"
            layout={DashLayout}
            component={Users}
          />
          <PrivateRoute
            path="/usuario/:username"
            layout={DashLayout}
            component={UserDetails}
          />
          <PrivateRoute
            path="/activities"
            layout={DashLayout}
            component={UsersActivities}
          />

          <PrivateRoute
            path="/profiles"
            layout={DashLayout}
            component={Profiles}
          />

          <PrivateRoute
            path="/projetos"
            layout={DashLayout}
            component={Projects}
          />
          <PrivateRoute
            path="/projeto/:id"
            layout={DashLayout}
            component={ProjectDetails}
          />

          <PrivateRoute
            path="/softwares"
            layout={DashLayout}
            component={Softwares}
          />
          <PrivateRoute
            path="/Dashboards"
            layout={DashLayout}
            component={Dasboards}
          />
          <PrivateRoute layout={DashLayout} component={NotFound} />
        </Switch>
      </Wrapper>
    </BrowserRouter>
  );
};

export default Routes;
