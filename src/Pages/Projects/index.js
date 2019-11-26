import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Title } from './styles';
import { Table, Button } from '../../styles/components';
import { GetProjects } from '../../services/ProjectService';
import CreateProject from '../../components/CreateProject';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [creatingProject, setcreatingProject] = useState(false);

  const fetchProjects = async () => {
    setProjects(await GetProjects());
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const updateProject = project => {
    setProjects([...projects, project]);
    setcreatingProject(false);
  };

  return (
    <div>
      <Title>
        <h1>Projetos</h1>
        <Button
          type="button"
          onClick={() => setcreatingProject(!creatingProject)}
        >
          Novo Projeto
        </Button>
      </Title>

      <div>
        {creatingProject && <CreateProject updateProject={updateProject} />}
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
                <Link to={`/projeto/${project.id}`}>ver mais</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Projects;
