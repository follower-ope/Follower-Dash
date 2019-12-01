import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GetUsers, GetUsersIncomplete } from '../../services/UserService';
import { Table, Button } from '../../styles/components';
import { Title } from './styles';

import CreateUser from '../../components/CreateUser';

function Users() {
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
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.username}>
              <td>
                <Link to={`/usuario/${user.username}`}>{user.username}</Link>
              </td>
              <td>
                {user.name ? (
                  user.name
                ) : (
                  <span className="faded">Não possui</span>
                )}
              </td>
              <td>
                {user.email ? (
                  user.email
                ) : (
                  <span className="faded">Não possui</span>
                )}
              </td>
              <td>
                {user.Profile ? (
                  user.Profile.description
                ) : (
                  <span className="faded">Não possui</span>
                )}
              </td>
              <td>
                {user.Project ? (
                  user.Project.title
                ) : (
                  <span className="faded">Não possui</span>
                )}
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
            <th>Perfil</th>
            <th>Projeto</th>
          </tr>
        </thead>
        <tbody>
          {usersIncomplete.map(user => (
            <tr key={user.username}>
              <td>{user.username}</td>
              <td>
                {user.name ? (
                  user.name
                ) : (
                  <span className="faded">Não possui</span>
                )}
              </td>
              <td>
                {user.email ? (
                  user.email
                ) : (
                  <span className="faded">Não possui</span>
                )}
              </td>
              <td>
                {user.Profile ? (
                  user.Profile.description
                ) : (
                  <span className="faded">Não possui</span>
                )}
              </td>
              <td>
                {user.Project ? (
                  user.Project.title
                ) : (
                  <span className="faded">Não possui</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default Users;
