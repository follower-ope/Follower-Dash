import { call, put } from 'redux-saga/effects';
import { errorMessage } from '../../services/Messages';
import api from '../../services/api';

import { Creators as LoginActions } from '../ducks/login';

export function* login(data) {
  try {
    const { payload } = data;

    const response = yield call(api.post, '/session', {
      email: payload.data.email,
      password: payload.data.password,
    });

    if (response.status === 200) {
      window.localStorage.setItem('token', response.data.token);
      yield put(LoginActions.loginSuccess(true));
      window.location = '/home';
    }
  } catch (err) {
    errorMessage(err.response.data.error);

    yield put(LoginActions.loginSuccess(null));
  }
}
