import React from 'react';

import { Container } from './styles';

const ErrorBox = ({ error: { message, visible }, hideError }) =>
  visible && (
    <Container>
      <p>{message}</p>
    </Container>
  );

export default ErrorBox;
