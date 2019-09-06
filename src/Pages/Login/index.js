import React from 'react';

import { Container, Card } from './styles';

export default function Login() {
  return (
    <Container>
      <Card>
        <h1>Login</h1>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Senha" />
        <button>Entrar</button>
      </Card>
    </Container>
  );
}
