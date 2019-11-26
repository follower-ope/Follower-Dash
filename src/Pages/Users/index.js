import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  GetUsers,
  GetUsersIncomplete,
  SaveUser,
} from '../../services/UserService';
import { Table, Button } from '../../styles/components';
import { Form, Title } from './styles';

const Users = () => {
  const [newUser, setNewUser] = useState({ username: '', name: '', email: '' });
  const [users, setUsers] = useState([]);
  const [usersIncomplete, setUsersIncomplete] = useState([]);
  const [creatingUser, setCreatingUser] = useState(false);

  const fetchUsers = async () => {
    setUsers(await GetUsers());
    setUsersIncomplete(await GetUsersIncomplete());
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleNewUserChange = obj => {
    setNewUser({ ...newUser, ...obj });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const nUser = await SaveUser(newUser);

    if (nUser) {
      setUsers([...users, nUser]);
      setNewUser({ username: '', name: '', email: '' });
      setCreatingUser(false);
    }
  };

  const handleNewUser = () => {
    setCreatingUser(!creatingUser);
  };

  return (
    <>
      <Title>
        <h1>Usuarios</h1>
        <Button type="button" onClick={() => handleNewUser()}>
          Novo Usuario
        </Button>
      </Title>
      <div>
        {creatingUser && (
          <Form onSubmit={e => handleSubmit(e)}>
            <label htmlFor="username">
              Nome de Usuario
              <input
                type="text"
                value={newUser.username}
                onChange={e =>
                  handleNewUserChange({ username: e.target.value })
                }
              />
            </label>
            <label htmlFor="nome">
              Nome
              <input
                type="text"
                value={newUser.name}
                onChange={e => handleNewUserChange({ name: e.target.value })}
              />
            </label>
            <label htmlFor="email">
              Email
              <input
                type="text"
                value={newUser.email}
                onChange={e => handleNewUserChange({ email: e.target.value })}
              />
            </label>
            <button type="submit">Salvar</button>
          </Form>
        )}
      </div>

      <Table>
        <thead>
          <tr>
            <th>Nome de usuario</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Perfil</th>
            <th>Projeto</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.username}>
              <td>{user.username}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.profile}</td>
              <td>{user.project}</td>
              <td>
                <Link to={`/usuario/${user.username}`}>ver mais</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <p>Usuarios com cadastro incompleto</p>
      <Table>
        <thead>
          <tr>
            <th>Nome de usuario</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Projeto</th>
          </tr>
        </thead>
        <tbody>
          {usersIncomplete.map(user => (
            <tr key={user.username}>
              <td>{user.username}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.project}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Users;
