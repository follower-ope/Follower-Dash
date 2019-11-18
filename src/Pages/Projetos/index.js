import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Title } from './styles';
import { Table, Button } from '../../styles/components';
import { GetProjetos, CreateProject } from '../../services/ProjetosService';

const Projetos = () => {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState(false);
  const [titleProject, setTitleProject] = useState('');
  const [descProject, setDescProject] = useState('');
  const [timeProject, setTimeProject] = useState('');

  const fetchProjetos = async () => {
    setProjects(await GetProjetos());
  };

  useEffect(() => {
    fetchProjetos();
  }, []);

  const handleTitleProjectChange = e => setTitleProject(e.target.value);
  const handleTimeProjectChange = e => setTimeProject(e.target.value);
  const handleDescProjectChange = e => setDescProject(e.target.value);

  const handleSubmit = async e => {
    e.preventDefault();

    const nProject = await CreateProject(
      titleProject,
      descProject,
      timeProject
    );

    if (nProject) {
      setProjects([...projects, nProject]);

      setTitleProject('');
      setTimeProject('');

      setNewProject(false);
    }
  };

  const handleNewProject = () => {
    setNewProject(!newProject);
  };

  return (
    <div>
      <Title>
        <h1>Projetos</h1>
        <Button type="button" onClick={() => handleNewProject()}>
          Novo Projeto
        </Button>
      </Title>

      <div>
        {newProject && (
          <form onSubmit={e => handleSubmit(e)}>
            <label htmlFor="nome">
              Nome
              <input
                type="text"
                value={titleProject}
                onChange={e => handleTitleProjectChange(e)}
              />
            </label>
            <label htmlFor="descricao">
              Descricao
              <input
                type="text"
                value={descProject}
                onChange={e => handleDescProjectChange(e)}
              />
            </label>
            <label htmlFor="timeproject">
              Time
              <input
                type="text"
                value={timeProject}
                onChange={e => handleTimeProjectChange(e)}
              />
            </label>
            <button type="button">Salvar</button>
          </form>
        )}
      </div>

      <Table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Descricao</th>
            <th>Horas</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {projects.map(project => (
            <tr key={project.id}>
              <td>{project.title}</td>
              <td>{project.description}</td>
              <td>{project.time}</td>
              <td>
                <Link to={`/projetos/${project.id}`}>ver mais</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Projetos;
