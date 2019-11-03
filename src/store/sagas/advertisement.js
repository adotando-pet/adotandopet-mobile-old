import { call, put } from 'redux-saga/effects';

import Toast from 'react-native-simple-toast';

import api from '~/services/api';
import { navigate } from '~/services/navigation';

import AdvertisementActions from '~/store/ducks/advertisement';

import { general } from '~/styles';

export function* getAdvertisementRequest() {
  try {
    const { data } = yield call(api.get, '/advertisements');

    yield put(AdvertisementActions.getAdvertisementSuccess(data));
  } catch (err) {
    yield put(AdvertisementActions.getAdvertisementFailure());
    Toast.show(
      'Houve um erro ao recuperar os anúncios! \nTente novamente...',
      Toast.SHORT,
      Toast.TOP,
      {
        ...general.toast,
        ...general.toastDanger,
      },
    );
  }
}

export function* registerAdvertisementRequest({ data }) {
  try {
    const response = yield call(api.post, '/advertisements', data);

    Toast.show(
      'O anúncio foi cadastrado com sucesso!',
      Toast.SHORT,
      Toast.TOP,
      {
        ...general.toast,
        ...general.toastSuccess,
      },
    );

    yield put(AdvertisementActions.registerAdvertisementSuccess(response.data));

    navigate('Announce');
  } catch (err) {
    yield put(AdvertisementActions.failure());
    Toast.show(
      'Houve um erro ao cadastrar o Anúncio! \nTente novamente...',
      Toast.SHORT,
      Toast.TOP,
      {
        ...general.toast,
        ...general.toastDanger,
      },
    );
  }
}
