import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FaSpinner } from 'react-icons/fa';
import { bindActionCreators } from 'redux';
import { errorMessage } from '../../services/Messages';
import { Creators as LoginActions } from '../../store/ducks/login';

import { Container, Card } from './style';

const Login = ({ login: { loading }, loginRequest }) => {
  const [emailInput, setEmailInput] = useState(null);
  const [passwordInput, setPasswordInput] = useState(null);
  const [email, setEmail] = useState({ value: '', isValid: false });
  const [password, setPassword] = useState({ value: '', isValid: false });

  function handleLogin(e) {
    e.preventDefault();

    if (email.value === '' || password.value === '') {
      errorMessage('Preencha todos os camps');

      if (email.value === '') {
        emailInput.focus();
      } else {
        passwordInput.focus();
      }

      return;
    }

    loginRequest({ email: email.value, password: password.value });
  }

  const handleChangeInputEmail = e =>
    setEmail({ value: e.target.value, isValid: email.isValid });
  const handleChangeInputPassword = e =>
    setPassword({ value: e.target.value, isValid: password.isValid });

  return (
    <Container>
      <Card>
        <h1>Login</h1>
        <form onSubmit={e => handleLogin(e)}>
          <input
            type="text"
            placeholder="Email"
            value={email.value}
            onChange={e => handleChangeInputEmail(e)}
            ref={input => {
              setEmailInput(input);
            }}
          />
          <input
            type="password"
            placeholder="Senha"
            value={password.value}
            onChange={e => handleChangeInputPassword(e)}
            ref={input => {
              setPasswordInput(input);
            }}
          />
          <button type="submit" disabled={loading}>
            {loading ? <FaSpinner /> : 'Entrar'}
          </button>
        </form>
      </Card>
    </Container>
  );
};

const mapStateToProps = state => ({
  login: state.login,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(LoginActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);

Login.propTypes = {
  login: PropTypes.element.isRequired,
  loginRequest: PropTypes.element.isRequired,
};
