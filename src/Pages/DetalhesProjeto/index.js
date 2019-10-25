import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import Select from 'react-dropdown-select';

import { Container, ChartContent, Content, UsersContent } from './style';

const DetalhesProjeto = props => {
  const [pieData, setPieData] = useState({});
  const [areaChartData, setAreaChartData] = useState({});
  const [usuarios, setUsuarios] = useState([]);

  const users = [{ label: 'User1', value: 1 }, { label: 'User2', value: 2 }];

  useEffect(() => {
    const { id } = props.match.params;

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

    setUsuarios(['usuario 1', 'usuario 2', 'usuario 3']);
  }, []);

  const handleInputKeyPressed = e => {
    if (e.target.value !== '' && e.which === 13) {
      setUsuarios([...usuarios, e.target.value]);
      e.target.value = '';
    }
  };

  const addUser = user => {
    user.map(u => {
      setUsuarios([...usuarios, u.label]);
    });
  };

  return (
    <>
      <h1>Projeto 1</h1>

      <Content>
        <UsersContent>
          <h5>usuarios do projeto</h5>
          <Select options={users} onChange={values => addUser(values)} />
          <input type="text" onKeyPress={e => handleInputKeyPressed(e)} />
          <div>
            <ul>
              {usuarios.map(user => (
                <li>{user}</li>
              ))}
            </ul>
          </div>
        </UsersContent>

        <Container>
          <ChartContent>
            {pieData.options && (
              <Chart
                options={pieData.options}
                series={pieData.series}
                type="pie"
                width="380"
              />
            )}
          </ChartContent>
          <ChartContent>
            {areaChartData.options && (
              <Chart
                options={areaChartData.options}
                series={areaChartData.series}
                type="area"
                width="500"
              />
            )}
          </ChartContent>
        </Container>
      </Content>
    </>
  );
};

export default DetalhesProjeto;
