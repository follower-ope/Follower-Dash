import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as LoginActions } from '../ducks/login';

export function* login(data) {
  console.tron.log('login');
  window.location = '/home';
  try {
    const { payload } = data;
    // TODO: refact
    const response = yield call(api.get, '/login');
    yield put(LoginActions.loginSuccess(null));
  } catch (err) {
    const errorMessage = err.message.data.message;
    const errorStatus = err.response.status;
    yield put(LoginActions.loginSuccess(null));
  }
}
