import { call, put } from 'redux-saga/effects';

import Toast from 'react-native-toast-native';

import api from '~/services/api';
import { navigate } from '~/services/navigation';

import AuthActions from '~/store/ducks/auth';

import { general } from '~/styles';

export function* signUpRequest({ data }) {
  try {
    const response = yield call(api.post, '/users', data);

    console.tron.log('response', response);

    Toast.show(`Você foi cadastrado(a) com sucesso \n${response.data.name}!`, Toast.SHORT, Toast.TOP, {
      ...general.toast,
      ...general.toastSuccess,
    });

    navigate('Announce');
  } catch (err) {
    yield put(AuthActions.failure());
    Toast.show('Houve um erro no seu Cadastro! \nTente novamente...', Toast.SHORT, Toast.TOP, {
      ...general.toast,
      ...general.toastDanger,
    });
  }
}

export function* signInRequest({ data }) {
  try {
    const response = yield call(api.post, '/sessions', data);

    Toast.show(`Seja Bem-Vindo(a) ${response.data.data.name}!`, Toast.SHORT, Toast.TOP, {
      ...general.toast,
      ...general.toastSuccess,
    });

    yield put(AuthActions.signinSuccess(response.data));

    navigate('Announce');
  } catch (err) {
    yield put(AuthActions.failure());
    Toast.show('Houve um erro no Login! \nTente novamente...', Toast.SHORT, Toast.TOP, {
      ...general.toast,
      ...general.toastDanger,
    });
  }
}

export function* forgotPasswordRequest({ data }) {
  try {
    const response = yield call(api.post, '/forgot-password', { email: data.email, redirect_url: 'https://urltemporaria.com.br/resetar-senha' });

    Toast.show(`Foram enviadas instruções para o email \n${data.email}!`, Toast.SHORT, Toast.TOP, {
      ...general.toast,
      ...general.toastSuccess,
    });

    // navigate('Announce');
  } catch (err) {
    yield put(AuthActions.failure());
    Toast.show('Houve um erro no processo para resetar sua senha! \nTente novamente...', Toast.SHORT, Toast.TOP, {
      ...general.toast,
      ...general.toastDanger,
    });
  }
}
