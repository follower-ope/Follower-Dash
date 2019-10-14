import React, { useEffect } from 'react';

import { Container, Card } from './style';

export default function Login({ history }) {
  useEffect(() => {
    if (true) history.push('/Home');
  }, []);

  function handleLogin(e) {
    e.preventDefault();

    history.push('/Home');
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
