import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  signinRequest: null,
  signupRequest: null,
  forgotPasswordRequest: null,

  signinSuccess: ['data'],

  failure: null,
});

export const AuthTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  token: '',
  loading: false,
});

/* Reducers to types */

const request = state => state.merge({ loading: true });
const failure = state => state.merge({ loading: false });

const signInSuccess = (state, { token }) => state.merge({
  token,
  loading: false,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGNIN_REQUEST]: request,
  [Types.SIGNUP_REQUEST]: request,
  [Types.FORGOT_PASSWORD_REQUEST]: request,

  [Types.SIGNIN_SUCCESS]: signInSuccess,

  [Types.FAILURE]: failure,
});
