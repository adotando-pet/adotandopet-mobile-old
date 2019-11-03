import { call, put, select } from 'redux-saga/effects';

import { AsyncStorage } from 'react-native';

import Toast from 'react-native-simple-toast';

import api from '~/services/api';
import { navigate } from '~/services/navigation';

import AuthActions from '~/store/ducks/auth';

import { general } from '~/styles';

export function* signUpRequest({ data }) {
  try {
    const response = yield call(api.post, '/users', data);

    Toast.show(
      `Você foi cadastrado(a) com sucesso \n${response.data.name}!`,
      Toast.SHORT,
      Toast.TOP,
      {
        ...general.toast,
        ...general.toastSuccess,
      },
    );

    yield put(AuthActions.signupSuccess());

    navigate('Announce');
  } catch (err) {
    yield put(AuthActions.failure());
    Toast.show(
      'Houve um erro no seu Cadastro! \nTente novamente...',
      Toast.SHORT,
      Toast.TOP,
      {
        ...general.toast,
        ...general.toastDanger,
      },
    );
  }
}

export function* signInRequest({ data }) {
  try {
    const response = yield call(api.post, '/sessions', data);

    // Toast.show(
    //   `Seja Bem-Vindo(a) ${response.data.data.name}!`,
    //   Toast.SHORT,
    //   Toast.TOP,
    //   {
    //     ...general.toast,
    //     ...general.toastSuccess,
    //   },
    // );

    yield call(
      AsyncStorage.setItem,
      '@AdotandoPet:token',
      response.data.token.token,
    );

    yield put(AuthActions.signinSuccess(response.data));

    navigate('Announce');
  } catch (err) {
    yield put(AuthActions.failure());
    Toast.show(
      'Houve um erro no Login! \nTente novamente...',
      Toast.SHORT,
      Toast.TOP,
      {
        ...general.toast,
        ...general.toastDanger,
      },
    );
  }
}

export function* forgotPasswordRequest({ data }) {
  try {
    yield call(api.post, '/forgot-password', {
      email: data.email,
      redirect_url: 'https://urltemporaria.com.br/resetar-senha',
    });

    Toast.show(
      `Foram enviadas instruções para o email \n${data.email}!`,
      Toast.SHORT,
      Toast.TOP,
      {
        ...general.toast,
        ...general.toastSuccess,
      },
    );

    // navigate('Announce');
  } catch (err) {
    yield put(AuthActions.failure());
    Toast.show(
      'Houve um erro no processo para resetar sua senha! \nTente novamente...',
      Toast.SHORT,
      Toast.TOP,
      {
        ...general.toast,
        ...general.toastDanger,
      },
    );
  }
}

export function* authCheck({ routeName }) {
  try {
    const auth = yield select(state => state.auth);

    if (auth.token) {
      navigate(routeName);
    } else {
      Toast.show(
        'Você precisa fazer Login para acessar essa página!',
        Toast.SHORT,
        Toast.TOP,
        {
          ...general.toast,
          ...general.toastDanger,
        },
      );
    }
  } catch (err) {
    yield put(AuthActions.failure());
    Toast.show(
      'Houve ao tentar verificar seu Login. Tente novamente...',
      Toast.SHORT,
      Toast.TOP,
      {
        ...general.toast,
        ...general.toastDanger,
      },
    );
  }
}
