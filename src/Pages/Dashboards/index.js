import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';

import { Container } from './styles';

function Dashboards() {
  const [dataChart, setData] = useState([]);

  useEffect(() => {
    setData([
      ['Pizza', 'Popularity'],
      ['Pepperoni', Math.random() * 100],
      ['Hawaiian', Math.random() * 100],
      ['Mushroom', Math.random() * 100],
      ['Sausage', Math.random() * 100],
      ['Anchovies', Math.random() * 100],
    ]);
  }, []);

  const handleclick = () => {
    setData([
      ['Pizza', 'Popularity'],
      ['Pepperoni', Math.random() * 100],
      ['Hawaiian', Math.random() * 100],
      ['Mushroom', Math.random() * 100],
      ['Sausage', Math.random() * 100],
      ['Anchovies', Math.random() * 100],
    ]);
  };

  return (
    <Container>
      <button onClick={() => handleclick()}>asd</button>
      <h1>Dashboards</h1>
      <div>
        <Chart
          width={'800px'}
          height={'400px'}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={dataChart}
          options={{
            title: 'Projeto 1',
            sliceVisibilityThreshold: 0.2,
            animation: {
              duration: 1000,
              easing: 'out',
              startup: true,
            },
          }}
          rootProps={{ 'data-testid': '7' }}
        />
      </div>
    </Container>
  );
}

export default Dashboards;
