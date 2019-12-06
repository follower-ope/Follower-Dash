import React, { useState, useEffect } from 'react';
import { GetUsers, GetUsersIncomplete } from '../../services/UserService';
import {
  GetProjects,
  GetProjectsProductivity,
} from '../../services/ProjectService';
import Loading from '../../components/Loading';
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
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const users = [...(await GetUsers()), ...(await GetUsersIncomplete())];
      setQtdUsers({ total: users.length });

      setQtdProject((await GetProjects()).length);
      setQtdProfiles((await GetProfiles()).length);
      setQtdSoftwares((await GetSoftwares()).length);

      setProjects(await GetProjectsProductivity());
      setLoading(false);
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
        {loading && <Loading />}
        {projects.map(project => {
          return (
            <ChartContent>
              <ProjectChart project={project} />
            </ChartContent>
          );
        })}
      </Content>
    </>
  );
}

export default Home;
