import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Chart from 'react-apexcharts';
import Select from 'react-dropdown-select';
import { GetUsers, ChangeUserProject } from '../../services/UserService';
import { GetProjectDetails } from '../../services/ProjectService';
import { Container, Content, UsersContent } from './style';
import { ChartContent, Button } from '../../styles/components';

function ProjectDetails({ match }) {
  const [project, setProject] = useState({});
  const [pieData, setPieData] = useState({});
  const [areaChartData, setAreaChartData] = useState({});
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const user = await GetUsers();

      if (project.users) {
        setUsers(
          user.filter(value => {
            const userInProject = project.users.find(element => {
              return element.username === value.username;
            });

            return !userInProject;
          })
        );
      }
    };
    fetchUsers();
  }, [project]);

  useEffect(() => {
    setPieData({
      options: {
        labels: ['Hrs Produtiva', 'Hrs Improdutivas'],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 300,
              },
              legend: {
                position: 'bottom',
              },
            },
          },
        ],
      },
      series: [100, 55],
    });

    setAreaChartData({
      options: {
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: 'smooth',
        },
        xaxis: {
          type: 'date',
          categories: [
            '2018-09-19',
            '2018-09-20',
            '2018-09-21',
            '2018-09-22',
            '2018-09-23',
            '2018-09-24',
            '2018-09-25',
          ],
        },
        tooltip: {
          x: {
            format: 'dd/MM',
          },
          y: {
            format: 'dd/MM',
          },
        },
      },
      series: [
        {
          name: 'Hrs Produtiva',
          data: [31, 40, 28, 51, 42, 109, 100],
        },
        {
          name: 'hrs Improdutiva',
          data: [11, 32, 45, 32, 34, 52, 41],
        },
      ],
    });

    const fetchProjectDetails = async () => {
      const { id } = match.params;
      setProject(await GetProjectDetails(id));
    };
    fetchProjectDetails();
  }, [match.params]);

  const addUser = user => {
    user.foreach(u => {
      setProject({
        ...project,
        users: [...project.users, { username: u.value, name: u.value }],
      });

      ChangeUserProject(u.value, project.id);
    });
  };

  const handleRemoveUser = username => {
    ChangeUserProject(username, null);

    setProject({
      ...project,
      users: project.users.filter(element => element.username !== username),
    });
  };

  return (
    <>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <br />
      <br />
      <br />
      <Content>
        <UsersContent>
          <h5>usuarios do projeto</h5>
          <Select
            options={users.map(u => {
              return { label: u.username, value: u.username };
            })}
            onChange={values => addUser(values)}
            placeholder="Selecione..."
          />
          <div>
            <ul>
              {project.users &&
                project.users.map(user => (
                  <li key={user.username}>
                    {user.username}
                    <Button
                      type="button"
                      onClick={() => handleRemoveUser(user.username)}
                    >
                      x
                    </Button>
                  </li>
                ))}
            </ul>
          </div>
        </UsersContent>

        <Container>
          <ChartContent>
            <h1>Titulo</h1>
            <div>
              {pieData.options && (
                <Chart
                  options={pieData.options}
                  series={pieData.series}
                  type="pie"
                  width="380"
                />
              )}
            </div>
          </ChartContent>
          <ChartContent>
            <h1>Titulo</h1>
            <div>
              {areaChartData.options && (
                <Chart
                  options={areaChartData.options}
                  series={areaChartData.series}
                  type="area"
                  width="500"
                />
              )}
            </div>
          </ChartContent>
        </Container>
      </Content>
    </>
  );
}

export default ProjectDetails;

ProjectDetails.propTypes = {
  match: PropTypes.element.isRequired,
};
