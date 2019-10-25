import React, { useState } from 'react';
import { connect } from 'react-redux';
import { store } from 'react-notifications-component';
import { FaSpinner } from 'react-icons/fa';
import { bindActionCreators } from 'redux';
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
      store.addNotification({
        message: 'Preencha todos os camps',
        type: 'danger',
        insert: 'top',
        container: 'top-right',
        animationIn: ['animated', 'fadeIn'],
        animationOut: ['animated', 'fadeOut'],
        dismiss: {
          duration: 2000,
          onScreen: true,
        },
      });
      if (email.value === '') {
        emailInput.focus();
      } else {
        passwordInput.focus();
      }

      return;
    }

    loginRequest({ email: 'vitor@gmail.com', password: '123' });

    // history.push('/Home');
  }

  const handleChangeInputEmail = e =>
    setEmail({ value: e.target.value, isValid: email.isValid });
  const handleChangeInputPassword = e =>
    setPassword({ value: e.target.value, isValid: password.isValid });

  return (
    <Container>
      <Card>
        <h1>Login</h1>
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
