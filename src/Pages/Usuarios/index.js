import React, { useState, useEffect } from 'react';
import { GetUsuarios, SaveUsuario } from '../../services/UsuariosService';

const Usuarios = () => {
  const [userName, setUserName] = useState('');
  const [name, setName] = useState('');
  const [users, setUsers] = useState([]);

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
  };

  return (
    <>
      <h1>Usuarios</h1>
      <form onSubmit={e => handleSubmit(e)}>
        <label>UserName</label>
        <input type="text" onChange={e => handleUserNameChange(e)} />
        <label>Nome</label>
        <input type="text" onChange={e => handleNameChange(e)} />
        <button>Salvar</button>
      </form>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.userName}</li>
        ))}
      </ul>
    </>
  );
};

export default Usuarios;
