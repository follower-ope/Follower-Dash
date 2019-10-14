import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';

function Produtividade() {
  const [data, setData] = useState({});
  const [count, setCount] = useState(0);

  const dt = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        label: '# of Votes',
        data: [5, 5, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  useEffect(() => {
    setData(dt);
  }, []);

  return (
    <>
      <h1>Produtividade</h1>
      <Doughnut data={data} />
    </>
  );
}

export default Produtividade;
