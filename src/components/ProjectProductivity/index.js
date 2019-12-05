import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

function ProjectProductivity({ productivity }) {
  const [pieData, setPieData] = useState({});

  useEffect(() => {
    console.log(productivity);
    const produtivas = productivity.productiveHours;
    const improdutivas = productivity.unproductiveHours;

    setPieData({
      options: {
        labels: ['Hrs Produtiva', 'Hrs Improdutivas'],
        tooltip: {
          y: {
            formatter: seriesValue => {
              if (seriesValue === produtivas.value) {
                return produtivas.label;
              }

              return improdutivas.label;
            },
          },
        },
        colors: ['rgba(42, 158, 251, .7)', 'rgba(173, 19, 19, .7)'],
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
      series: [produtivas.value, improdutivas.value],
    });
  }, []);

  return (
    <>
      <h1>Produtividade</h1>
      {pieData.options && (
        <>
          <p>Total de horas gastas: {productivity.totalHoursSpent.label}</p>
          <Chart
            options={pieData.options}
            series={pieData.series}
            type="pie"
            width="380"
          />
        </>
      )}
    </>
  );
}

export default ProjectProductivity;
