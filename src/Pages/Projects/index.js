import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Title } from './styles';
import { Table, Button } from '../../styles/components';
import { GetProjects } from '../../services/ProjectService';
import Loading from '../../components/Loading';
import CreateProject from '../../components/CreateProject';

function Projects() {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const [creatingProject, setcreatingProject] = useState(false);

  const fetchProjects = async () => {
    setProjects(await GetProjects());
    setLoading(false);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const updateProject = project => {
    console.log([...projects, project])
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
          {creatingProject ? 'Cancelar' : 'Novo Projeto'}
        </Button>
      </Title>

      <div>
        {creatingProject && <CreateProject updateProject={updateProject} />}
      </div>

      {loading ? (
        <Loading />
      ) : (
        <Table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Descricao</th>
              <th>Horas</th>
            </tr>
          </thead>
          <tbody>
            {projects.map(project => (
              <tr key={project.id}>
                <td>
                  <Link to={`/projeto/${project.id}`}>{project.title}</Link>
                </td>
                <td>{project.description}</td>
                <td>{project.time}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
}

export default Projects;
