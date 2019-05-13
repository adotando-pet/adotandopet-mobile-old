import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StatusBar } from 'react-native';

import FloatLabelInput from '~/components/FloatLabelInput';
import NativeButton from '~/components/NativeButton';

import logo from '~/assets/images/signin_logo.png';

import {
  Container,
  ContentContainer,
  Logo,
  ForgotPasswordLink,
  ForgotPasswordText,
  TermsLink,
  TermsLinkText,
  SignupLinkContainer,
  SignupLinkContent,
  SignupLinkText,
} from './styles';

export default class SignIn extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    email: '',
    password: '',
  };

  handleInputChange = (id, value) => {
    this.setState({ [id]: value });
  };

  handleNavigate = (route) => {
    const { navigation } = this.props;
    navigation.navigate(route);
  };

  setLastInputRef = ref => (this.passwordInput = ref);

  render() {
    const { email, password } = this.state;
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <ContentContainer>
          <Logo source={logo} />
          <FloatLabelInput
            id="email"
            label="Email"
            value={email}
            onChangeText={this.handleInputChange}
            onSubmitEditing={() => this.passwordInput.focus()}
            returnKeyType="next"
            keyboardType="email-address"
          />
          <FloatLabelInput
            id="password"
            setRef={this.setLastInputRef}
            label="Password"
            value={password}
            onChangeText={this.handleInputChange}
            returnKeyType="send"
            onSubmitEditing={() => this.handleNavigate('Announce')}
            secureTextEntry
          />
          <ForgotPasswordLink onPress={() => this.handleNavigate('ForgotPassword')}>
            <ForgotPasswordText>Esqueceu sua senha?</ForgotPasswordText>
          </ForgotPasswordLink>
          <NativeButton onPress={() => this.handleNavigate('Announce')} value="Entrar" />
          <SignupLinkContainer onPress={() => this.handleNavigate('SignUp')}>
            <SignupLinkContent>
              <SignupLinkText>Ainda não tem conta?</SignupLinkText>
              <SignupLinkText featured>Cadastre-se!</SignupLinkText>
            </SignupLinkContent>
          </SignupLinkContainer>
        </ContentContainer>
        <TermsLink>
          <TermsLinkText>Privacy & Terms</TermsLinkText>
        </TermsLink>
      </Container>
    );
  }
}
