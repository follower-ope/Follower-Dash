import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-dropdown-select';
import Loading from '../../components/Loading';
import ProjectProductivity from '../../components/ProjectProductivity';
import ProjectProductivityByDay from '../../components/ProjectProductivityByDay';
import ProfileProjectChart from '../../components/ProfileProjectChart';
import { GetUsers, ChangeUserProject } from '../../services/UserService';
import { GetProjectDetails } from '../../services/ProjectService';
import { Container, Content } from './style';
import { Table, ChartContent, Button } from '../../styles/components';
import { errorMessage } from '../../services/Messages';

function ProjectDetails({ match }) {
  const [loadingProject, setLoadingProject] = useState(true);
  const [loadingUsers, setLoadingUsers] = useState(true);
  const [project, setProject] = useState({});
  const [users, setUsers] = useState([]);
  const [userToAdd, setUserToAdd] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      const user = await GetUsers();

      if (project.users) {
        console.log(project);
        setUsers(
          user.filter(value => {
            const userInProject = project.users.find(element => {
              return element.username === value.username;
            });

            return !userInProject;
          })
        );
        setLoadingUsers(false);
      }
    };
    fetchUsers();
  }, [project]);

  useEffect(() => {
    const fetchProjectDetails = async () => {
      const { id } = match.params;
      setProject(await GetProjectDetails(id));
      setLoadingProject(false);
    };
    fetchProjectDetails();
  }, [match.params]);

  const addUser = user => {
    setProject({
      ...project,
      users: [...project.users, { username: user, name: user }],
    });

    ChangeUserProject(user, project.id);
  };

  const handleRemoveUser = username => {
    ChangeUserProject(username, null);

    setProject({
      ...project,
      users: project.users.filter(element => element.username !== username),
    });
  };

  const handleAddUser = () => {
    if (!userToAdd) {
      errorMessage('Selecione um usuario para adicionar ao projeto');
    } else {
      addUser(userToAdd);
    }
  };

  return (
    <>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      {/* <ButtonsContent>
        <button
          type="button"
          className={listUsers && 'selected'}
          onClick={() => setListUsers(true)}
        >
          Usuarios
        </button>
        <button
          type="button"
          className={!listUsers && 'selected'}
          onClick={() => setListUsers(false)}
        >
          Produtividade
        </button>
      </ButtonsContent> */}

      <Container>
        <ChartContent>
          {loadingProject ? (
            <Loading />
          ) : (
            project.profiles && (
              <ProfileProjectChart profiles={project.profiles} />
            )
          )}
        </ChartContent>
        <ChartContent>
          {loadingProject ? (
            <Loading />
          ) : (
            project.productivity && (
              <ProjectProductivity productivity={project.productivity} />
            )
          )}
        </ChartContent>
      </Container>

      <Container>
        <ChartContent className="full">
          {project.id && <ProjectProductivityByDay projectId={project.id} />}
        </ChartContent>
      </Container>

      <Content className="marginTop">
        {loadingUsers ? (
          <Loading />
        ) : (
          <>
            <div>
              <h5>Incluir usuario no projeto</h5>
              <Select
                options={users.map(u => {
                  return { label: u.username, value: u.username };
                })}
                value={userToAdd}
                onChange={values => setUserToAdd(values[0].value)}
                placeholder="Selecione..."
              />
            </div>
            <Button type="button" onClick={() => handleAddUser()}>
              Adicionar
            </Button>
            <Table>
              <thead>
                <th>Username</th>
                <th>Nome</th>
                <th>Perfil</th>
                <th />
              </thead>
              <tbody>
                {project.users &&
                  project.users.map(user => (
                    <tr key={user.username}>
                      <td>{user.username}</td>
                      <td>
                        {user.name ? (
                          user.name
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
                        <Button
                          type="button"
                          onClick={() => handleRemoveUser(user.username)}
                        >
                          Remover
                        </Button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </>
        )}
      </Content>
    </>
  );
}

export default ProjectDetails;

ProjectDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object,
  }).isRequired,
};
