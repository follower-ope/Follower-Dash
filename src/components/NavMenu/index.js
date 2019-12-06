import React, { useState, useEffect } from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import { Content } from './style';

function NavMenu() {
  const [name, setName] = useState('');

  useEffect(() => {
    setName(window.localStorage.getItem('name'));
  }, []);

  const handleLoggout = () => {
    window.localStorage.removeItem('name');
    window.localStorage.removeItem('token');
    window.location = '/';
  };

  return (
    <Content>
      <p>Bem vindo, {name}</p>
      <button type="button" onClick={() => handleLoggout()}>
        <FaSignOutAlt />
      </button>
    </Content>
  );
}

export default NavMenu;
