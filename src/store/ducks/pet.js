import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  registerPetRequest: ['data'],
  registerPetSuccess: ['data'],
  failure: null,

  getPetRequest: null,
  getPetSuccess: ['data'],
  getPetFailure: null,
});

export const PetTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  data: {},
  loading: false,
});

/* Reducers to types */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.REGISTER_PET_REQUEST]: state => state.merge({ loading: true }),
  [Types.REGISTER_PET_SUCCESS]: state => state.merge({ loading: false }),
  [Types.FAILURE]: state => state.merge({ loading: false }),

  [Types.GET_PET_REQUEST]: state => state.merge({ loading: true }),
  [Types.GET_PET_SUCCESS]: (state, { data }) => state.merge({ loading: false, data }),
  [Types.GET_PET_FAILURE]: state => state.merge({ loading: false }),
});
