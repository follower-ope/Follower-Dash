import React from 'react';
import { useSelector, connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import { Creators as LoginActions } from '../../store/ducks/login';

import { Container, Card } from './style';

const Login = ({ login: { loading }, loginRequest }) => {
  const wtf = useSelector(state => state.data);
  function handleLogin(e) {
    e.preventDefault();
    loginRequest('teste');
    // history.push('/Home');
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
