import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  signinRequest: ['data'],
  signupRequest: ['data'],
  forgotPasswordRequest: ['data'],

  signinSuccess: ['data'],

  failure: null,
});

export const AuthTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  data: [],
  token: '',
  loading: false,
});

/* Reducers to types */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGNIN_REQUEST]: (state, { data }) => state.merge({ loading: true }),
  [Types.SIGNUP_REQUEST]: (state, { data }) => state.merge({ loading: true }),
  [Types.FORGOT_PASSWORD_REQUEST]: (state, { data }) => state.merge({ loading: true }),

  [Types.SIGNIN_SUCCESS]: (state, { data }) => {
    console.tron.log('duck data', data);
    return state.merge({
      loading: false,
      data: data.data,
      token: data.token.token,
    });
  },

  [Types.FAILURE]: state => state.merge({ loading: false }),
});
