import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginForm from '../../components/LoginForm';
import { Creators as LoginActions } from '../../store/ducks/login';
import { Container, Card } from './style';

function Login({ login: { loading }, loginRequest }) {
  return (
    <Container>
      <Card>
        <h1>Login</h1>
        <LoginForm loading={loading} loginRequest={loginRequest} />
      </Card>
    </Container>
  );
}

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
