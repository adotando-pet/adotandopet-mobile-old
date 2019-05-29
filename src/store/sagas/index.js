import { all, takeLatest } from 'redux-saga/effects';

import { AuthTypes } from '~/store/ducks/auth';
import { signUpRequest, signInRequest, forgotPasswordRequest } from './auth';

export default function* rootSaga() {
  yield all([
    takeLatest(AuthTypes.SIGNUP_REQUEST, signUpRequest),
    takeLatest(AuthTypes.SIGNIN_REQUEST, signInRequest),
    takeLatest(AuthTypes.FORGOT_PASSWORD_REQUEST, forgotPasswordRequest),
  ]);
}
