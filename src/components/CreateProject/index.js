import React, { useState } from 'react';
import { SaveProject } from '../../services/ProjectService';
import { Button } from '../../styles/components';
import { Form } from './styles';

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
    <Form onSubmit={e => handleSubmit(e)}>
      <label htmlFor="nome">
        <input
          type="text"
          placeholder="Nome"
          value={project.title}
          onChange={e => handleChange({ title: e.target.value })}
        />
      </label>
      <label htmlFor="descricao">
        <input
          type="text"
          placeholder="Descricao"
          value={project.description}
          onChange={e => handleChange({ description: e.target.value })}
        />
      </label>
      <label htmlFor="timeproject">
        <input
          type="text"
          placeholder="Tempo do projeto (Horas)"
          value={project.time}
          onChange={e => handleChange({ time: e.target.value })}
        />
      </label>
      <Button type="submit">Salvar</Button>
    </Form>
  );
}

export default CreateProject;
