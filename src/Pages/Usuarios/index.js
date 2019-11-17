import React, { useState, useEffect } from 'react';

import { GetUsuarios, SaveUsuario } from '../../services/UsuariosService';
import { GetProjetos } from '../../services/ProjetosService';

import { Container } from './styles';

const Usuarios = () => {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState(false);
  const [projects, setProjects] = useState([]);

  const fetchUsers = async () => {
    setUsers(await GetUsuarios());
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

    const nUser = await SaveUsuario(username, name, email);

    if (nUser) {
      setUsers([...users, nUser]);

      setName('');
      setUsername('');
      setEmail('');

      setNewUser(false);
    }
  };

  const handleNewUser = () => {
    setNewUser(true);
  };

  return (
    <>
      <h1>Usuarios</h1>
      <Container>
        <div>
          <button onClick={() => handleNewUser()}>Novo Usuario</button>
          {newUser && (
            <form onSubmit={e => handleSubmit(e)}>
              <label>Nome de Usuario</label>
              <input
                type="text"
                value={username}
                onChange={e => handleUsernameChange(e)}
              />
              <label>Nome</label>
              <input
                type="text"
                value={name}
                onChange={e => handleNameChange(e)}
              />
              <label>Email</label>
              <input
                type="text"
                value={email}
                onChange={e => handleEmailChange(e)}
              />
              <button>Salvar</button>
            </form>
          )}
        </div>

        <table>
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
                  {projects.find(p => p.id === user.project_id)
                    ? projects.find(p => p.id === user.project_id).title
                    : ''}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </>
  );
};

export default Usuarios;
