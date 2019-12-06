import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import { Link } from 'react-router-dom';
import { msToTime } from '../../services/HoursService';
import { Container } from './styles';

function ProjectChart({ project }) {
  const [pieData, setPieData] = useState({});

  useEffect(() => {
    const hrsRestante = project.duracao.value;
    const param = {
      label: '',
      value: 0,
    };
    if (
      project.horasImprodutivas.value + project.horasProdutivas.value >
      hrsRestante
    ) {
      param.label = 'Horas Ultrapassadas';
      param.value =
        project.horasImprodutivas.value +
        project.horasProdutivas.value -
        hrsRestante;
    } else {
      param.label = 'Horas Restantes';
      param.value =
        hrsRestante -
        (project.horasImprodutivas.value + project.horasProdutivas.value);
    }

    setPieData({
      options: {
        labels: [param.label, 'Horas Produtivas', 'Horas Improdutivas'],
        tooltip: {
          y: {
            formatter: seriesValue => msToTime(seriesValue),
          },
        },
        colors: [
          '#4646dc',
          'rgba(0, 227, 150, 0.85)',
          'rgba(173, 19, 19, .85)',
        ],
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
      series: [
        param.value,
        project.horasProdutivas.value,
        project.horasImprodutivas.value,
      ],
    });
  }, [project]);

  return (
    <>
      <Container>
        <div>
          <h1>
            <Link to={`/projeto/${project.id}`}>{project.titulo}</Link>
          </h1>
          <p>{project.descricao}</p>
        </div>
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
      </Container>
    </>
  );
}

export default ProjectChart;
