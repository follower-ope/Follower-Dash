import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

import { Content } from './style';
import { ChartContent } from '../../styles/components';

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
      <Content>
        {data.options && (
          <ChartContent>
            <h1>Chart</h1>
            <Chart
              options={data.options}
              series={data.series}
              type="bar"
              width={500}
              height={320}
            />
          </ChartContent>
        )}

        {data.options && (
          <ChartContent>
            <h1>Chart</h1>
            <Chart
              options={data.options}
              series={data.series}
              type="bar"
              width={200}
              height={320}
            />
          </ChartContent>
        )}
      </Content>
    </>
  );
};

export default Home;
