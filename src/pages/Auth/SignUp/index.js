import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StatusBar } from 'react-native';

import NativeButton from '~/components/NativeButton';

import {
  Container,
  ContentContainer,
  Title,
  FormContainer,
  FormLabel,
  FormInput,
  FormNotificationContainer,
  FormNotificationText,
  FormNotificationSwitch,
  SigninLinkContainer,
  SigninLinkContent,
  SigninLinkText,
} from './styles';

export default class SignUp extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {};

  handleNavigate = (route) => {
    const { navigation } = this.props;
    navigation.navigate(route);
  };

  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <ContentContainer>
          <Title>Cadastro</Title>
          <FormContainer>
            <FormLabel>Nome Completo</FormLabel>
            <FormInput placeholder="Insira aqui seu Nome" />
            <FormLabel>Telefone/Celular</FormLabel>
            <FormInput placeholder="Insira aqui seu Telefone/Celular" />
            <FormLabel>Email</FormLabel>
            <FormInput placeholder="Insira aqui seu Email" />
            <FormLabel>Senha</FormLabel>
            <FormInput placeholder="Insira aqui sua Senha" secureTextEntry />
            <FormLabel>Confirmação de Senha</FormLabel>
            <FormInput placeholder="Insira sua Senha novamente" secureTextEntry />
          <FormNotificationContainer>
            <FormNotificationText>Gostaria de receber notificações para ficar por dentro das novidades e acontecimentos da plataforma?</FormNotificationText>
            <FormNotificationSwitch />
          </FormNotificationContainer>
          </FormContainer>
          <NativeButton onPress={() => this.handleNavigate('SignIn')} value="Cadastrar" />
          <SigninLinkContainer onPress={() => this.handleNavigate('SignIn')}>
            <SigninLinkContent>
              <SigninLinkText>Já tem conta?</SigninLinkText>
              <SigninLinkText featured>Entrar!</SigninLinkText>
            </SigninLinkContent>
          </SigninLinkContainer>
        </ContentContainer>
      </Container>
    );
  }
}
