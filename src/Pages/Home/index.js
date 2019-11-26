import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

import { Content } from './style';
import { ChartContent } from '../../styles/components';

const Home = () => {
  const [options, setOptions] = useState({});
  const [series, setSeries] = useState([]);

  useEffect(() => {
    setOptions({
      chart: {
        id: 'apexchart-example',
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
      },
    });
    setSeries([
      {
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ]);
  }, []);

  const handleClick = () => {
    if (options) {
      setOptions({
        ...options,
        xaxis: {
          categories: [...options.xaxis.categories, 1999],
        },
      });
    }

    if (series) {
      setSeries([{ name: series[0].name, data: [...series[0].data, 50] }]);
    }
  };

  return (
    <>
      <Content>
        {options && (
          <ChartContent>
            <h1>Chart</h1>
            <Chart
              options={options}
              series={series}
              type="bar"
              width={500}
              height={320}
            />
          </ChartContent>
        )}

        {options && (
          <ChartContent>
            <h1>Chart</h1>
            <Chart
              options={options}
              series={series}
              type="bar"
              width={500}
              height={320}
            />
          </ChartContent>
        )}
      </Content>
    </>
  );
};

export default Home;
