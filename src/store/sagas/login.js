import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as LoginActions } from '../ducks/login';

export function* login(data) {
  try {
    const { payload } = data;

    const response = yield call(api.post, '/auth', {
      email: payload.data.email,
      password: payload.data.password,
    });

    if (response.status === 200) {
      window.localStorage.setItem('token', response.data.token);
      yield put(LoginActions.loginSuccess(null));
      window.location = '/home';
    }
  } catch (err) {
    console.log(err);
    // const errorMessage = err.message.data.message;
    // const errorStatus = err.response.status;
    yield put(LoginActions.loginSuccess(null));
  }
}
