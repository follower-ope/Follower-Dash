import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

const Sidebar = () => (
  <Container>
    <header>Menu</header>
    <nav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/usuarios">Usuarios</Link>
        </li>
      </ul>
    </nav>
  </Container>
);

export default Sidebar;
