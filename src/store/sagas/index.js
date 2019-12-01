import { all, takeLatest } from 'redux-saga/effects';

import { Types as ProjectsTypes } from '../ducks/projects';
import { Types as LoginTypes } from '../ducks/login';

import { login } from './login';
import { getProjects } from './projects';

export default function* rootSaga() {
  yield all([
    takeLatest(ProjectsTypes.GET_REQUEST, getProjects),
    takeLatest(LoginTypes.GET_REQUEST_LOGIN, login),
  ]);
}
