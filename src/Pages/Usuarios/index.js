import React, { useState, useEffect } from 'react';

import {
  GetUsers,
  GetUsersIncomplete,
  SaveUser,
} from '../../services/UsuariosService';
import { GetProjetos } from '../../services/ProjetosService';

import { Table, Button } from '../../styles/components';
import { Form, Title } from './styles';

const Usuarios = () => {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [users, setUsers] = useState([]);
  const [usersIncomplete, setUsersIncomplete] = useState([]);
  const [newUser, setNewUser] = useState(false);
  const [projects, setProjects] = useState([]);

  const fetchUsers = async () => {
    setUsers(await GetUsers());
    setUsersIncomplete(await GetUsersIncomplete());
  };

  const fetchProjects = async () => {
    setProjects(await GetProjetos());
  };

  useEffect(() => {
    fetchUsers();
    fetchProjects();
  }, []);

  const handleUsernameChange = e => setUsername(e.target.value);
  const handleNameChange = e => setName(e.target.value);
  const handleEmailChange = e => setEmail(e.target.value);

  const handleSubmit = async e => {
    e.preventDefault();

    const nUser = await SaveUser(username, name, email);

    if (nUser) {
      setUsers([...users, nUser]);

      setName('');
      setUsername('');
      setEmail('');

      setNewUser(false);
    }
  };

  const handleNewUser = () => {
    setNewUser(!newUser);
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
        {newUser && (
          <Form onSubmit={e => handleSubmit(e)}>
            <label htmlFor="username">
              Nome de Usuario
              <input
                type="text"
                value={username}
                onChange={e => handleUsernameChange(e)}
              />
            </label>
            <label htmlFor="nome">
              Nome
              <input
                type="text"
                value={name}
                onChange={e => handleNameChange(e)}
              />
            </label>
            <label htmlFor="email">
              Email
              <input
                type="text"
                value={email}
                onChange={e => handleEmailChange(e)}
              />
            </label>
            <button type="button">Salvar</button>
          </Form>
        )}
      </div>

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
          {users.map(user => (
            <tr key={user.username}>
              <td>{user.username}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                {projects.find(p => p.id === user.project_id) ? (
                  projects.find(p => p.id === user.project_id).title
                ) : (
                  <p className="faded">Nenhum</p>
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
            <th>Projeto</th>
          </tr>
        </thead>
        <tbody>
          {usersIncomplete.map(user => (
            <tr key={user.username}>
              <td>{user.username}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                {projects.find(p => p.id === user.project_id) ? (
                  projects.find(p => p.id === user.project_id).title
                ) : (
                  <p className="faded">Nenhum</p>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Usuarios;
