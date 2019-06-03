import { call, put } from 'redux-saga/effects';

import Toast from 'react-native-toast-native';

import api from '~/services/api';

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
