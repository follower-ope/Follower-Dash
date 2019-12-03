import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from '../../styles/components';

function UsersList({ users }) {
  return (
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
                <span className="faded">Não informado</span>
              )}
            </td>
            <td>
              {user.email ? (
                user.email
              ) : (
                <span className="faded">Não informado</span>
              )}
            </td>
            <td>
              {user.Profile ? (
                user.Profile.description
              ) : (
                <span className="faded">Não informado</span>
              )}
            </td>
            <td>
              {user.Project ? (
                user.Project.title
              ) : (
                <span className="faded">Não informado</span>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default UsersList;
