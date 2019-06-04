import { all, takeLatest } from 'redux-saga/effects';

import { AuthTypes } from '~/store/ducks/auth';
import {
  signUpRequest, signInRequest, forgotPasswordRequest, authCheck,
} from './auth';

import { AdvertisementTypes } from '~/store/ducks/advertisement';
import {
  getAdvertisementRequest, registerAdvertisementRequest,
} from './advertisement';

import { AdoptionTypes } from '~/store/ducks/adoption';
import {
  getAdoptionRequest, registerAdoptionRequest,
} from './adoption';

import { PetTypes } from '~/store/ducks/pet';
import {
  registerPetRequest, getPetRequest,
} from './pet';

export default function* rootSaga() {
  yield all([
    takeLatest(AuthTypes.SIGNUP_REQUEST, signUpRequest),
    takeLatest(AuthTypes.SIGNIN_REQUEST, signInRequest),
    takeLatest(AuthTypes.FORGOT_PASSWORD_REQUEST, forgotPasswordRequest),
    takeLatest(AuthTypes.AUTH_CHECK, authCheck),

    takeLatest(AdvertisementTypes.GET_ADVERTISEMENT_REQUEST, getAdvertisementRequest),
    takeLatest(AdvertisementTypes.REGISTER_ADVERTISEMENT_REQUEST, registerAdvertisementRequest),

    takeLatest(AdoptionTypes.GET_ADOPTION_REQUEST, getAdoptionRequest),
    takeLatest(AdoptionTypes.REGISTER_ADOPTION_REQUEST, registerAdoptionRequest),

    takeLatest(PetTypes.REGISTER_PET_REQUEST, registerPetRequest),
    takeLatest(PetTypes.GET_PET_REQUEST, getPetRequest),
  ]);
}
