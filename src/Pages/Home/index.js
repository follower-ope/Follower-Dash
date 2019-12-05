import React, { useState, useEffect } from 'react';
import { GetUsers, GetUsersIncomplete } from '../../services/UserService';
import { GetProjects } from '../../services/ProjectService';
import { GetProfiles } from '../../services/ProfileService';
import { GetSoftwares } from '../../services/SoftwaresService';
import { Content, Card } from './style';
import { ChartContent } from '../../styles/components';
import ProjectChart from '../../components/ProjectChart';

function Home({ history }) {
  const [qtdUsers, setQtdUsers] = useState({});
  const [qtdProjects, setQtdProject] = useState(0);
  const [qtdProfiles, setQtdProfiles] = useState(0);
  const [qtdSoftwares, setQtdSoftwares] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const users = [...(await GetUsers()), ...(await GetUsersIncomplete())];
      setQtdUsers({ total: users.length });

      const projects = await GetProjects();
      setQtdProject(projects.length);

      const profiles = await GetProfiles();
      setQtdProfiles(profiles.length);

      const softwares = await GetSoftwares();
      setQtdSoftwares(softwares.length);
    }
    fetchData();
  }, []);

  return (
    <>
      <Content>
        <Card className="blue" onClick={() => history.push('/usuarios')}>
          <div>{qtdUsers.total} Usuarios</div>
        </Card>
        <Card className="green" onClick={() => history.push('/projetos')}>
          <div>{qtdProjects} Projetos</div>
        </Card>
        <Card className="orange" onClick={() => history.push('/profiles')}>
          <div>{qtdProfiles} Perfis</div>
        </Card>
        <Card className="red" onClick={() => history.push('/softwares')}>
          <div>{qtdSoftwares} Softwares</div>
        </Card>
      </Content>

      <Content>
        <ProjectChart projectId={1} />
        <ProjectChart projectId={2} />
        <ProjectChart projectId={3} />
      </Content>

      <Content>
        <ChartContent />
        <ChartContent />
        <ChartContent />
      </Content>
    </>
  );
}

export default Home;
