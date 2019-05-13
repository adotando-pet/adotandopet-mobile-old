import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StatusBar } from 'react-native';

import NativeButton from '~/components/NativeButton';

import {
  Container,
  ContentContainer,
  HeaderContainer,
  HeaderTitle,
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

export default class SignIn extends Component {
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
