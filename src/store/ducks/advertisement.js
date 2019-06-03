import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  getAdvertisementRequest: null,
  getAdvertisementSuccess: ['data'],
  getAdvertisementFailure: null,
});

export const AdvertisementTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  data: [],
  loading: false,
});

/* Reducers to types */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_ADVERTISEMENT_REQUEST]: state => state.merge({ loading: true }),
  [Types.GET_ADVERTISEMENT_SUCCESS]: (state, { data }) => state.merge({ loading: false, data }),
  [Types.GET_ADVERTISEMENT_FAILURE]: state => state.merge({ loading: false }),
});
