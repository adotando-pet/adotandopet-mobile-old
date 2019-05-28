import { all, takeLatest } from 'redux-saga/effects';

import { AuthTypes } from '~/store/ducks/auth';
import { signUpRequest, signInRequest } from './auth';

export default function* rootSaga() {
  yield all([
    takeLatest(AuthTypes.SIGNUP_REQUEST, signUpRequest),
    takeLatest(AuthTypes.SIGNIN_REQUEST, signInRequest),
  ]);
}
