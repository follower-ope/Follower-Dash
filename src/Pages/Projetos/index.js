import React, { useState, useEffect } from 'react';
import { GetProjetos, CreateProject } from '../../services/ProjetosService';

const Projetos = () => {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState(false);
  const [nameProject, setNameProject] = useState('');
  const [timeProject, setTimeProject] = useState('');

  const fetchProjetos = async () => {
    setProjects(await GetProjetos());
  };

  useEffect(() => {
    fetchProjetos();
  }, []);

  const handleNameProjectChange = e => setNameProject(e.target.value);
  const handleTimeProjectChange = e => setTimeProject(e.target.value);

  const handleSubmit = async e => {
    e.preventDefault();

    await CreateProject(nameProject, timeProject);
    await fetchProjetos();

    setNameProject('');
    setTimeProject('');

    setNewProject(false);
  };

  const handleNewProject = () => {
    setNewProject(true);
  };

  return (
    <div>
      <h1>Projetos</h1>
      <div>
        <button onClick={() => handleNewProject()}>Novo Projeto</button>
        {newProject && (
          <form onSubmit={e => handleSubmit(e)}>
            <label>Nome</label>
            <input
              type="text"
              value={nameProject}
              onChange={e => handleNameProjectChange(e)}
            />
            <label>Time</label>
            <input
              type="text"
              value={timeProject}
              onChange={e => handleTimeProjectChange(e)}
            />
            <button>Salvar</button>
          </form>
        )}
      </div>

      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Horas</th>
          </tr>
        </thead>
        <tbody>
          {projects.map(project => (
            <tr>
              <td>{project.name}</td>
              <td>{project.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Projetos;
