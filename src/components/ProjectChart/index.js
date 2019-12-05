import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import { GetProjectDetails } from '../../services/ProjectService';
import { Container } from './styles';

function ProjectChart({ projectId }) {
  const [loading, setLoading] = useState(true);
  const [project, setProject] = useState({});
  const [pieData, setPieData] = useState({});

  useEffect(() => {
    const fetchProject = async () => {
      setProject(await GetProjectDetails(projectId));
      setLoading(false);
    };
    fetchProject();
  }, []);

  useEffect(() => {
    if (!Object.keys(project).length) return;

    console.log(project);
    const productivity = project.productivity;

    setPieData({
      options: {
        labels: ['Horas restantes', 'Horas Produtiva', 'Horas Improdutivas'],
        // tooltip: {
        //   y: {
        //     formatter: seriesValue => msToTime(seriesValue),
        //   },
        // },
        colors: [
          'rgba(42, 158, 251, .7)',
          'rgba(24, 236, 24, .7)',
          'rgba(173, 19, 19, .7)',
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
        // productivity.totalHoursSpent.value -
        //   (productivity.productiveHours.value +
        //     productivity.productiveHours.value),
        // productivity.productiveHours.value,
        // productivity.unproductiveHours.value,
        Math.random(),
        Math.random(),
        Math.random(),
      ],
    });
  }, [project]);

  return loading ? (
    <p>carregando</p>
  ) : (
    <>
      <Container>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
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
