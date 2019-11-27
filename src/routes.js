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
import NotFound from './components/NotFound';

import { PublicRoute, PrivateRoute } from './components/Route';

const Routes = () => {
  return (
    <BrowserRouter>
      <Wrapper>
        <Switch>
          <PublicRoute exact path="/" layout={LoginLayout} component={Login} />
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
