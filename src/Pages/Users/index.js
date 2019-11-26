import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GetUsers, GetUsersIncomplete } from '../../services/UserService';
import { Table, Button } from '../../styles/components';
import { Title } from './styles';

import CreateUser from '../../components/CreateUser';

const Users = () => {
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

  const updateUser = user => {
    setUsers([...users, user]);
    setCreatingUser(false);
  };

  return (
    <>
      <Title>
        <h1>Usuarios</h1>
        <Button type="button" onClick={() => setCreatingUser(!creatingUser)}>
          Novo Usuario
        </Button>
      </Title>
      <div>{creatingUser && <CreateUser updateUser={updateUser} />}</div>

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
