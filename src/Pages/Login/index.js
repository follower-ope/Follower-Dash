import React from 'react';
import { connect } from 'react-redux';
import { FaSpinner } from 'react-icons/fa';
import { bindActionCreators } from 'redux';
import { Creators as LoginActions } from '../../store/ducks/login';

import { Container, Card } from './style';

const Login = ({ login: { loading }, loginRequest }) => {
  async function handleLogin(e) {
    e.preventDefault();

    await loginRequest({ email: 'vitor@gmail.com', password: '123' });

    // history.push('/Home');
  }

  return (
    <Container>
      <Card>
        <h1>Login</h1>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Senha" />
        <button onClick={e => handleLogin(e)} disabled={loading}>
          {loading ? <FaSpinner /> : 'Entrar'}
        </button>
      </Card>
    </Container>
  );
};

const mapStateToProps = state => ({
  login: state.login,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(LoginActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
