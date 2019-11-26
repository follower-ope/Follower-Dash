import React, { useState } from 'react';
import { SaveProject } from '../../services/ProjectService';

function CreateProject({ updateProject }) {
  const [project, setProject] = useState({
    title: '',
    description: '',
    time: '',
  });

  const handleSubmit = async e => {
    e.preventDefault();

    const nProject = await SaveProject(project);

    if (nProject) {
      updateProject(project);
      setProject({ title: '', description: '', time: '' });
    }
  };

  const handleChange = obj => {
    setProject({ ...project, ...obj });
  };

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <label htmlFor="nome">
        Nome
        <input
          type="text"
          value={project.title}
          onChange={e => handleChange({ title: e.target.value })}
        />
      </label>
      <label htmlFor="descricao">
        Descricao
        <input
          type="text"
          value={project.description}
          onChange={e => handleChange({ description: e.target.value })}
        />
      </label>
      <label htmlFor="timeproject">
        Time
        <input
          type="text"
          value={project.time}
          onChange={e => handleChange({ time: e.target.value })}
        />
      </label>
      <button type="submit">Salvar</button>
    </form>
  );
}

export default CreateProject;
