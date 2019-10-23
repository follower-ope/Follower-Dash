import React, { useState, useEffect } from 'react';
import { GetUsuarios, SaveUsuario } from '../../services/UsuariosService';

import { Container } from './styles';

const Usuarios = () => {
  const [userName, setUserName] = useState('');
  const [name, setName] = useState('');
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState(false);

  const fetchUsers = async () => {
    setUsers(await GetUsuarios());
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleUserNameChange = e => setUserName(e.target.value);
  const handleNameChange = e => setName(e.target.value);

  const handleSubmit = async e => {
    e.preventDefault();

    await SaveUsuario(userName, name);
    await fetchUsers();

    setName('');
    setUserName('');

    setNewUser(false);
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
                value={userName}
                onChange={e => handleUserNameChange(e)}
              />
              <label>Nome</label>
              <input
                type="text"
                value={name}
                onChange={e => handleNameChange(e)}
              />
              <button>Salvar</button>
            </form>
          )}
        </div>

        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Nome de usuario</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr>
                <td>{user.name}</td>
                <td>{user.userName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </>
  );
};

export default Usuarios;
