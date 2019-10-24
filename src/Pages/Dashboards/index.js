import React, { useState, useEffect } from 'react';

import { Container } from './styles';

function Dashboards() {
  const [dataChart, setData] = useState([]);

  useEffect(() => {}, []);

  const handleclick = () => {};

  return (
    <Container>
      <button onClick={() => handleclick()}>asd</button>
      <h1>Dashboards</h1>
      <div />
    </Container>
  );
}

export default Dashboards;
