import React from 'react';

import { Container, Card } from './style';

export default function Login({ history }) {
  function handleLogin(e) {
    e.preventDefault();

    history.push('/dashboard');
  }

  return (
    <Container>
      <Card>
        <h1>Login</h1>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Senha" />
        <button onClick={e => handleLogin(e)}>Entrar</button>
      </Card>
    </Container>
  );
}
