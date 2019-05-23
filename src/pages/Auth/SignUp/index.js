import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StatusBar } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AuthActions from '~/store/ducks/auth';

import NativeButton from '~/components/NativeButton';

import {
  Container,
  ContentContainer,
  Title,
  FormContainer,
  FormLabel,
  FormInput,
  SigninLinkContainer,
  SigninLinkContent,
  SigninLinkText,
} from './styles';

class SignUp extends Component {
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
            <FormLabel>Email</FormLabel>
            <FormInput placeholder="Insira aqui seu Email" />
            <FormLabel>Senha</FormLabel>
            <FormInput placeholder="Insira aqui sua Senha" secureTextEntry />
            <FormLabel>Confirmação de Senha</FormLabel>
            <FormInput placeholder="Insira sua Senha novamente" secureTextEntry />
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

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => bindActionCreators(AuthActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUp);
