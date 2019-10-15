import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as LoginActions } from '../ducks/login';

export function* login(data) {
  try {
    const { payload } = data;
    // TODO: refact
    const response = yield call(api.get, '/login');
    console.tron.log(payload);

    yield put(LoginActions.loginSuccess(null));
    window.location = '/';
  } catch (err) {
    const errorMessage = err.message.data.message;
    const errorStatus = err.response.status;
    yield put(LoginActions.loginSuccess(null));
  }
}
