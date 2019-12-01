import React, { useState, useEffect } from 'react';
import { SaveUser } from '../../services/UserService';
import { GetProfiles } from '../../services/ProfileService';
import { GetProjects } from '../../services/ProjectService';
import { Button } from '../../styles/components';
import { Form } from './styles';

function CreateUser({ updateUser }) {
  const [user, setUser] = useState({ username: '', name: '', email: '' });
  const [projects, setProjects] = useState([
    { id: 0, title: 'Selecione o projeto' },
  ]);
  const [profiles, setProfiles] = useState([
    { id: 0, description: 'Selecione o perfil' },
  ]);

  const fetchData = async () => {
    setProfiles([...profiles, ...(await GetProfiles())]);
    setProjects([...projects, ...(await GetProjects())]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();

    const nUser = await SaveUser(user);

    if (nUser) {
      updateUser(user);
      setUser({ username: '', name: '', email: '' });
    }
  };

  const handleUserChange = obj => {
    setUser({ ...user, ...obj });
  };

  return (
    <Form onSubmit={e => handleSubmit(e)}>
      <div>
        <label htmlFor="username">
          <input
            type="text"
            value={user.username}
            placeholder="Nome de usuario"
            onChange={e => handleUserChange({ username: e.target.value })}
          />
        </label>
        <label htmlFor="nome">
          <input
            type="text"
            value={user.name}
            placeholder="Nome"
            onChange={e => handleUserChange({ name: e.target.value })}
          />
        </label>
        <label htmlFor="email">
          <input
            type="text"
            value={user.email}
            placeholder="Email"
            onChange={e => handleUserChange({ email: e.target.value })}
          />
        </label>
      </div>
      <div>
        <label htmlFor="project">
          <select name="project">
            {projects.map(project => (
              <option key={project.id} value={project.id}>
                {project.title}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="project">
          <select name="project">
            {profiles.map(profile => (
              <option key={profile.id} value={profile.id}>
                {profile.description}
              </option>
            ))}
          </select>
        </label>
      </div>

      <Button type="submit">Salvar</Button>
    </Form>
  );
}

export default CreateUser;
