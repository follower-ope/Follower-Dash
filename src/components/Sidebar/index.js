import React from 'react';
import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaGlobe,
  FaAddressCard,
  FaExchangeAlt,
} from 'react-icons/fa';
import { MdExtension } from 'react-icons/md';

import { NavLink } from 'react-router-dom';

import { Container } from './styles';

import icon from '../../assets/img/icon.svg';

const Sidebar = () => (
  <Container>
    <header>
      <span>
        <img src={icon} alt="logo" />
      </span>
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
              <FaAddressCard />
              <span>Perfis</span>
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
          <NavLink activeClassName="active" to="/activities">
            <p>
              <FaExchangeAlt />
              <span>Entra/Saida</span>
            </p>
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/softwares">
            <p>
              <FaGlobe />
              <span>Softwares</span>
            </p>
          </NavLink>
        </li>
      </ul>
    </nav>
  </Container>
);

export default Sidebar;
