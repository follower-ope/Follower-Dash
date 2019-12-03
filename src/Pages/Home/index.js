import React, { useState, useEffect } from 'react';
import { GetUsers, GetUsersIncomplete } from '../../services/UserService';
import { GetProjects } from '../../services/ProjectService';
import { Content, Card } from './style';

function Home() {
  const [qtdUsers, setQtdUsers] = useState({});
  const [qtdProjects, setQtdProject] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const users = [...(await GetUsers()), ...(await GetUsersIncomplete())];
      setQtdUsers({ total: users.length });

      const projects = await GetProjects();
      setQtdProject(projects.length);
    }
    fetchData();
  }, []);

  return (
    <>
      <Content>
        <Card>
          <div>{qtdUsers.total} Usuarios</div>
        </Card>
        <Card>
          <div>{qtdProjects} Projetos</div>
        </Card>
        <Card>
          <div>{qtdProjects} Projetos</div>
        </Card>
        <Card>
          <div>{qtdProjects} Projetos</div>
        </Card>
      </Content>
    </>
  );
}

export default Home;
