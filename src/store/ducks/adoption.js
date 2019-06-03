import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  registerAdoptionRequest: ['id'],
  registerAdoptionSuccess: ['data'],
  registerAdoptionFailure: null,

  getAdoptionRequest: null,
  getAdoptionSuccess: ['data'],
  getAdoptionFailure: null,
});

export const AdoptionTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  data: [],
  loading: false,
});

/* Reducers to types */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.REGISTER_ADOPTION_REQUEST]: state => state.merge({ loading: true }),
  [Types.REGISTER_ADOPTION_SUCCESS]: (state, { data }) => state.merge({
    loading: false,
    data: [...state.data, data],
  }),
  [Types.REGISTER_ADOPTION_FAILURE]: state => state.merge({ loading: false }),

  [Types.GET_ADOPTION_REQUEST]: state => state.merge({ loading: true }),
  [Types.GET_ADOPTION_SUCCESS]: (state, { data }) => state.merge({ loading: false, data }),
  [Types.GET_ADOPTION_FAILURE]: state => state.merge({ loading: false }),
});
