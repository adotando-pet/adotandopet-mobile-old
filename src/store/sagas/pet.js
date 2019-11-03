import { call, put } from 'redux-saga/effects';

import Toast from 'react-native-simple-toast';

import api from '~/services/api';
import { navigate } from '~/services/navigation';

import PetActions from '~/store/ducks/pet';

import { general } from '~/styles';

export function* registerPetRequest({ data }) {
  try {
    const response = yield call(api.post, '/pets', data);

    Toast.show(
      `O(a) ${response.data.name} foi cadastrado com sucesso!`,
      Toast.SHORT,
      Toast.TOP,
      {
        ...general.toast,
        ...general.toastSuccess,
      }
    );

    yield put(PetActions.registerPetSuccess());

    navigate('MyPets');
  } catch (err) {
    yield put(PetActions.failure());
    Toast.show(
      'Houve um erro no cadastro! \nTente novamente...',
      Toast.SHORT,
      Toast.TOP,
      {
        ...general.toast,
        ...general.toastDanger,
      }
    );
  }
}

export function* getPetRequest() {
  try {
    const { data } = yield call(api.get, '/pets');

    yield put(PetActions.getPetSuccess(data));
  } catch (err) {
    yield put(PetActions.failure());
    Toast.show(
      'Houve um erro ao recuperar seus pets! \nTente novamente...',
      Toast.SHORT,
      Toast.TOP,
      {
        ...general.toast,
        ...general.toastDanger,
      }
    );
  }
}
