import React from 'react';
import { FaHome, FaUser, FaProjectDiagram } from 'react-icons/fa';
import { MdTimeline, MdExtension } from 'react-icons/md';

import { NavLink } from 'react-router-dom';

import { Container } from './styles';

const Sidebar = () => (
  <Container>
    <header>Menu</header>
    <nav>
      <ul>
        <li>
          <NavLink activeClassName="active" to="/home">
            <p>
              <FaHome />
              Home
            </p>
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/usuarios">
            <p>
              <FaUser />
              Usuarios
            </p>
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/projetos">
            <p>
              <FaProjectDiagram />
              Projetos
            </p>
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/softwares">
            <p>
              <MdExtension />
              Softwares
            </p>
          </NavLink>
        </li>
        {/* <li>
          <NavLink activeClassName="active" to="/dashboards">
            <p>
              <MdTimeline />
              Dashboards
            </p>
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
        </li> */}
      </ul>
    </nav>
  </Container>
);

export default Sidebar;
