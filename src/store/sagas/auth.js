import { call, put } from 'redux-saga/effects';

import api from '~/services/api';

import AuthActions from '~/store/ducks/auth';

export function* signUpRequest({ data }) {
  try {
    console.tron.log('data', data);
    const response = yield call(api.post, '/users', data);

    console.tron.log('response', response);
  } catch (err) {
    console.tron.log(err);
    yield put(AuthActions.failure());
  }
}

export function* signInRequest({ data }) {
  try {
    console.tron.log('data', data);
    const response = yield call(api.post, '/sessions', data);

    console.tron.log('response', response);

    yield put(AuthActions.signinSuccess(response.data));
  } catch (err) {
    console.tron.log(err);
    yield put(AuthActions.failure());
  }
}
