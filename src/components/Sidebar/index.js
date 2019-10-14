import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

const Sidebar = () => (
  <Container>
    <div>
      <nav>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/usuarios">Usuarios</Link>
        </li>
      </nav>
    </div>
  </Container>
);

export default Sidebar;
