import React, { useState } from 'react';
import { SaveUser } from '../../services/UserService';
import { Button } from '../../styles/components';
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
        <input
          type="text"
          value={user.username}
          placeholder="Nome de usuario"
          onChange={e => handleUserChange({ username: e.target.value })}
        />
      </label>
      <label htmlFor="nome">
        <input
          type="text"
          value={user.name}
          placeholder="Nome"
          onChange={e => handleUserChange({ name: e.target.value })}
        />
      </label>
      <label htmlFor="email">
        <input
          type="text"
          value={user.email}
          placeholder="Email"
          onChange={e => handleUserChange({ email: e.target.value })}
        />
      </label>
      <Button type="submit">Salvar</Button>
    </Form>
  );
}

export default CreateUser;
