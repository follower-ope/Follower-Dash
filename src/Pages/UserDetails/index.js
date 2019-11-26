import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { GetUser, UpdateUser } from '../../services/UserService';
import { GetProjects } from '../../services/ProjectService';
import { GetProfiles } from '../../services/ProfileService';

function UserDetails({ match }) {
  const [user, setUser] = useState({});
  const [projects, setProjects] = useState([]);
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { username } = match.params;
      setUser(await GetUser(username));
      setProjects(await GetProjects());
      setProfiles(await GetProfiles());
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log(user);
  }, [user]);

  const handleChange = obj => {
    setUser({
      ...user,
      ...obj,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    UpdateUser(user);
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
        <label htmlFor="project">
          Projeto
          <select
            name="project"
            onChange={e => handleChange({ project_id: e.target.value })}
          >
            {projects.map(project => (
              <option
                key={project.id}
                value={project.id}
                selected={user.project === project.title}
              >
                {project.title}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="profile">
          Perfil
          <select
            name="profile"
            onChange={e => handleChange({ profile_id: e.target.value })}
          >
            {profiles.map(profile => (
              <option
                key={profile.id}
                value={profile.id}
                selected={user.profile === profile.description}
              >
                {profile.description}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Salvar</button>
      </form>
    </>
  );
}

UserDetails.propTypes = {
  match: PropTypes.element.isRequired,
};

export default UserDetails;
