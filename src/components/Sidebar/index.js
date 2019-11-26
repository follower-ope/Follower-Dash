import React from 'react';
import { FaHome, FaUser, FaProjectDiagram } from 'react-icons/fa';
import { MdExtension } from 'react-icons/md';

import { NavLink } from 'react-router-dom';

import { Container } from './styles';

const Sidebar = () => (
  <Container>
    <header>
      <span>Menu</span>
    </header>
    <nav>
      <ul>
        <li>
          <NavLink activeClassName="active" to="/home">
            <p>
              <FaHome />
              <span>Home</span>
            </p>
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/usuarios">
            <p>
              <FaUser />
              <span>Usuarios</span>
            </p>
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/profiles">
            <p>
              <FaUser />
              <span>Perfils de usuario</span>
            </p>
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/projetos">
            <p>
              <FaProjectDiagram />
              <span>Projetos</span>
            </p>
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/softwares">
            <p>
              <MdExtension />
              <span>Softwares</span>
            </p>
          </NavLink>
        </li>
      </ul>
    </nav>
  </Container>
);

export default Sidebar;
