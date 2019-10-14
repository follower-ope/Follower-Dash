import React, { useEffect } from 'react';

import { Container, Card } from './style';

export default function Login({ history }) {
  useEffect(() => {
    if (false) history.push('/Home');
  }, [history]);

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
