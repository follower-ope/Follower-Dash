import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

const Home = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    setData({
      options: {
        chart: {
          id: 'apexchart-example',
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        },
      },
      series: [
        {
          name: 'series-1',
          data: [30, 40, 45, 50, 49, 60, 70, 91],
        },
      ],
    });
  }, []);

  return (
    <>
      <h1>Home</h1>
      <div>
        {data.options && (
          <Chart
            options={data.options}
            series={data.series}
            type="bar"
            width={500}
            height={320}
          />
        )}
      </div>
    </>
  );
};

export default Home;
