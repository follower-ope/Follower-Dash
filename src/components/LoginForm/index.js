import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaSpinner } from 'react-icons/fa';
import { LoginSchema } from '../../Validators';
import { errorMessage } from '../../services/Messages';

function LoginForm({ loginRequest, loading }) {
  const [login, setLogin] = useState({ email: '', password: '' });

  async function handleLogin(e) {
    e.preventDefault();

    try {
      await LoginSchema.validate(login);
    } catch (err) {
      errorMessage(err.message);
      return;
    }

    loginRequest(login);
  }

  return (
    <form onSubmit={e => handleLogin(e)}>
      <input
        type="text"
        placeholder="Email"
        value={login.email}
        onChange={e => setLogin({ ...login, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Senha"
        value={login.password}
        onChange={e => setLogin({ ...login, password: e.target.value })}
      />
      <button type="submit" disabled={loading}>
        {loading ? <FaSpinner /> : 'Entrar'}
      </button>
    </form>
  );
}

export default LoginForm;

LoginForm.propTypes = {
  loading: PropTypes.element.isRequired,
  loginRequest: PropTypes.element.isRequired,
};
