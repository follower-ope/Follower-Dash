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
      console.log(response.data);
      window.localStorage.setItem('token', response.data.token);
      window.localStorage.setItem(
        'name',
        response.data.user.name
          ? response.data.user.name
          : response.data.user.username
      );
      yield put(LoginActions.loginSuccess(true));
      window.location = '/home';
    }
  } catch ({ response }) {
    errorMessage(
      response
        ? response.data.error
        : 'Ocorreu um erro, tente novamente mais tarde'
    );

    yield put(LoginActions.loginSuccess(null));
  }
}
