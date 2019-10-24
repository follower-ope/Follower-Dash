import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import { GetUsuarios, SaveUsuario } from '../../services/UsuariosService';

import { Container } from './styles';

const Usuarios = () => {
  const [userName, setUserName] = useState('');
  const [name, setName] = useState('');
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState(false);
  const [data, setData] = useState({});

  const fetchUsers = async () => {
    setUsers(await GetUsuarios());
  };

  useEffect(() => {
    fetchUsers();
    setData({
      options: {
        chart: {
          id: 'apexchart-example',
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        },
      },
      series: [
        {
          name: 'series-1',
          data: [30, 40, 45, 50, 49, 60, 70, 91],
        },
      ],
    });
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
    setData({
      options: {
        ...data.options,
        xaxis: {
          ...data.xaxis,
          categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008],
        },
      },
      series: [
        {
          name: 'series-1',
          data: [90, 30, 10, 10, 80, 100, 20, 51],
        },
      ],
    });
  };

  return (
    <>
      <h1>Usuarios</h1>
      <Container>
        <div>
          <div>
            {data.options && (
              <Chart
                options={data.options}
                series={data.series}
                type="bar"
                width={500}
                height={320}
              />
            )}
          </div>

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
