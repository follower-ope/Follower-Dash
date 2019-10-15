import { all, takeLatest } from 'redux-saga/effects';

import { Types as LoginTypes } from '../ducks/login';

import { login } from './login';

export default function* rootSaga() {
  yield all([takeLatest(LoginTypes.GET_REQUEST_LOGIN, login)]);
}
