import { call, put } from 'redux-saga/effects';
import { store } from 'react-notifications-component';
import api from '../../services/api';

import { Creators as LoginActions } from '../ducks/login';

export function* login(data) {
  try {
    const { payload } = data;

    window.localStorage.setItem('token', '123');
    window.localStorage.setItem('name', 'Admin');
    yield put(LoginActions.loginSuccess(null));
    window.location = '/home';

    // const response = yield call(api.post, '/auth', {
    //   email: payload.data.email,
    //   password: payload.data.password,
    // });

    // if (response.status === 200) {
    //   window.localStorage.setItem('token', response.data.token);
    //   yield put(LoginActions.loginSuccess(null));
    //   window.location = '/home';
    // }
  } catch (err) {
    store.addNotification({
      message: 'Ocorreu um erro, tente novamente mais tarde',
      type: 'danger',
      insert: 'top',
      container: 'top-right',
      animationIn: ['animated', 'fadeIn'],
      animationOut: ['animated', 'fadeOut'],
      dismiss: {
        duration: 2000,
        onScreen: true,
      },
    });
    yield put(LoginActions.loginSuccess(null));
  }
}
