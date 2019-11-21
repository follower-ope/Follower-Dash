import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import Select from 'react-dropdown-select';
import { GetUsers } from '../../services/UsuariosService';
import { GetProjectDetails } from '../../services/ProjetosService';
import { Container, Content, UsersContent } from './style';
import { ChartContent } from '../../styles/components';

const DetalhesProjeto = props => {
  const [project, setProject] = useState({});
  const [pieData, setPieData] = useState({});
  const [areaChartData, setAreaChartData] = useState({});
  const [usuarios, setUsuarios] = useState([]);

  const fetchUsers = async () => {
    setUsuarios(await GetUsers());
  };

  const fetchProjectDetails = async () => {
    const { id } = props.match.params;
    setProject(await GetProjectDetails(id));
  };

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

    fetchUsers();
    fetchProjectDetails();
  }, []);

  const handleInputKeyPressed = e => {
    if (e.target.value !== '' && e.which === 13) {
      setUsuarios([
        ...usuarios,
        { name: e.target.value, username: e.target.value },
      ]);
      e.target.value = '';
    }
  };

  const addUser = user => {
    user.map(u => {
      setUsuarios([...usuarios, u]);
    });
  };

  return (
    <>
      <h1>{project.title}</h1>

      <Content>
        <UsersContent>
          <h5>usuarios do projeto</h5>
          <Select
            options={usuarios.map(u => {
              return { label: u.username, value: u.username };
            })}
            onChange={values => addUser(values)}
          />
          <input type="text" onKeyPress={e => handleInputKeyPressed(e)} />
          <div>
            <ul>
              {usuarios.map(user => (
                <li key={user.username}>{user.username}</li>
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
};

export default DetalhesProjeto;
