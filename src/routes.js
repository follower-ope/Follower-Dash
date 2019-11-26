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

import Route from './components/Route';

const Routes = () => {
  return (
    <BrowserRouter>
      <Wrapper>
        <Switch>
          <Route exact path="/" layout={LoginLayout} component={Login} />
          <Route path="/login" layout={LoginLayout} component={Login} />
          <Route path="/home" layout={DashLayout} component={Home} />

          <Route path="/usuarios" layout={DashLayout} component={Users} />
          <Route
            path="/usuario/:username"
            layout={DashLayout}
            component={UserDetails}
          />

          <Route path="/profiles" layout={DashLayout} component={Profiles} />

          <Route path="/projetos" layout={DashLayout} component={Projects} />
          <Route
            path="/projeto/:id"
            layout={DashLayout}
            component={ProjectDetails}
          />

          <Route path="/softwares" layout={DashLayout} component={Softwares} />
          <Route path="/Dashboards" layout={DashLayout} component={Dasboards} />
          <Route layout={DashLayout} component={NotFound} />
        </Switch>
      </Wrapper>
    </BrowserRouter>
  );
};

export default Routes;
