import React from 'react';
import { FaSpinner } from 'react-icons/fa';
import { Container } from './styles';

function Loading() {
  return (
    <Container>
      <h1>
        Loading <FaSpinner />
      </h1>
    </Container>
  );
}

export default Loading;
