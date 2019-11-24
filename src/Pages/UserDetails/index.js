import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { GetUser } from '../../services/UserService';

const UserDetails = props => {
  const [user, setUser] = useState({});

  const fetchUser = async () => {
    const { username } = props.match.params;
    setUser(await GetUser(username));
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleChange = obj => {
    setUser({
      ...user,
      ...obj,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('lol');
  };

  return (
    <>
      <h1>User detalhes</h1>
      <form onSubmit={e => handleSubmit(e)}>
        <label htmlFor="username">
          Username
          <input
            type="text"
            value={user.username}
            onChange={e => handleChange({ username: e.target.value })}
          />
        </label>
        <label htmlFor="name">
          name
          <input
            type="text"
            value={user.name}
            onChange={e => handleChange({ name: e.target.value })}
          />
        </label>
        <label htmlFor="email">
          email
          <input
            type="text"
            value={user.email}
            onChange={e => handleChange({ email: e.target.value })}
          />
        </label>
        <button type="submit">Salvar</button>
      </form>
    </>
  );
};

export default UserDetails;

UserDetails.propTypes = {
  match: PropTypes.element.isRequired,
};
