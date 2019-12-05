import React from 'react';
import { FaSpinner } from 'react-icons/fa';
import { Container } from './styles';

function Loading() {
  return (
    <Container>
      <FaSpinner />
    </Container>
  );
}

export default Loading;
