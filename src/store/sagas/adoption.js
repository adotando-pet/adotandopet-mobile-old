import { call, put } from 'redux-saga/effects';

import Toast from 'react-native-simple-toast';

import api from '~/services/api';
import { goBack } from '~/services/navigation';

import AdoptionActions from '~/store/ducks/adoption';

import { general } from '~/styles';

export function* getAdoptionRequest() {
  try {
    const { data } = yield call(api.get, '/adoptions');

    yield put(AdoptionActions.getAdoptionSuccess(data));
  } catch (err) {
    yield put(AdoptionActions.getAdoptionFailure());
    Toast.show(
      'Houve um erro ao recuperar suas adoções! \nTente novamente...',
      Toast.LONG,
      Toast.TOP,
      {
        ...general.toast,
        ...general.toastDanger,
      },
    );
  }
}

export function* registerAdoptionRequest({ data }) {
  try {
    yield call(api.post, `/adoptions/${data.id}`);

    Toast.show('Interesse registrado!', Toast.LONG, Toast.TOP, {
      ...general.toast,
      ...general.toastSuccess,
    });

    yield put(AdoptionActions.registerAdoptionSuccess());

    goBack();
  } catch (err) {
    yield put(AdoptionActions.registerAdoptionFailure());
    Toast.show(
      'Houve um erro ao registrar seu pedido de adoção! \nTente novamente...',
      Toast.LONG,
      Toast.TOP,
      {
        ...general.toast,
        ...general.toastDanger,
      },
    );
  }
}
