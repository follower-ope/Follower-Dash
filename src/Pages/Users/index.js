import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GetUsers, GetUsersIncomplete } from '../../services/UserService';
import { Table, Button } from '../../styles/components';
import { Title } from './styles';

import UserList from '../../components/UsersList';
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

      <UserList users={users} />

      <p>Usuarios com cadastro incompleto</p>
      <UserList users={usersIncomplete} />
    </>
  );
}

export default Users;
