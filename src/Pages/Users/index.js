import React, { useState, useEffect } from 'react';
import { GetUsers, GetUsersIncomplete } from '../../services/UserService';
import { Button } from '../../styles/components';
import { Title, Content } from './styles';

import Loading from '../../components/Loading';
import UserList from '../../components/UsersList';
import CreateUser from '../../components/CreateUser';

function Users() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [usersIncomplete, setUsersIncomplete] = useState([]);
  const [creatingUser, setCreatingUser] = useState(false);
  const [listUsersIncomplete, setListUsersIncomplete] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setUsers(await GetUsers());
      setLoading(false);
      setUsersIncomplete(await GetUsersIncomplete());
    };

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
          {creatingUser ? 'Cancelar' : 'Novo Usuario'}
        </Button>
      </Title>
      <div>{creatingUser && <CreateUser updateUser={updateUser} />}</div>
      <br />

      <Content>
        <button
          type="button"
          className={!listUsersIncomplete && 'selected'}
          onClick={() => setListUsersIncomplete(false)}
        >
          Todos Usuarios
        </button>
        <button
          type="button"
          className={listUsersIncomplete && 'selected'}
          onClick={() => setListUsersIncomplete(true)}
        >
          Usuarios incompleto
        </button>
      </Content>

      {loading && <Loading />}
      {!loading &&
        (listUsersIncomplete ? (
          <UserList users={usersIncomplete} />
        ) : (
          <UserList users={users} />
        ))}
    </>
  );
}

export default Users;
