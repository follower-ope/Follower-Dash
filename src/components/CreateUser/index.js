import React, { useState } from 'react';
import { SaveUser } from '../../services/UserService';
import { Form } from './styles';

function CreateUser({ updateUser }) {
  const [user, setUser] = useState({ username: '', name: '', email: '' });

  const handleSubmit = async e => {
    e.preventDefault();

    const nUser = await SaveUser(user);

    if (nUser) {
      updateUser(user);
      setUser({ username: '', name: '', email: '' });
    }
  };

  const handleUserChange = obj => {
    setUser({ ...user, ...obj });
  };

  return (
    <Form onSubmit={e => handleSubmit(e)}>
      <label htmlFor="username">
        Nome de Usuario
        <input
          type="text"
          value={user.username}
          onChange={e => handleUserChange({ username: e.target.value })}
        />
      </label>
      <label htmlFor="nome">
        Nome
        <input
          type="text"
          value={user.name}
          onChange={e => handleUserChange({ name: e.target.value })}
        />
      </label>
      <label htmlFor="email">
        Email
        <input
          type="text"
          value={user.email}
          onChange={e => handleUserChange({ email: e.target.value })}
        />
      </label>
      <button type="submit">Salvar</button>
    </Form>
  );
}

export default CreateUser;
