import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

export function* getProjects() {
  try {
    const response = yield call(api.get, '/projects', {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('token')}`,
      },
    });

    console.log(response);
  } catch ({ response }) {
    console.log(response);
  }
}
