import React from 'react';

import { NavLink } from 'react-router-dom';

import { Container } from './styles';

const Sidebar = () => (
  <Container>
    <header>Menu</header>
    <nav>
      <ul>
        <li>
          <NavLink activeClassName="active" to="/home">
            <p>Home</p>
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/usuarios">
            <p>Usuarios</p>
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/projetos">
            <p>Projetos</p>
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/dashboards">
            <p>Dashboards</p>
          </NavLink>
          <br />
          <NavLink activeClassName="active" to="/dashboards">
            Usuarios Entrada Saida
          </NavLink>
          <br />
          <NavLink activeClassName="active" to="/dashboards">
            Projetos
          </NavLink>
          <br />
          <NavLink activeClassName="active" to="/dashboards">
            Usuarios
          </NavLink>
        </li>
      </ul>
    </nav>
  </Container>
);

export default Sidebar;
