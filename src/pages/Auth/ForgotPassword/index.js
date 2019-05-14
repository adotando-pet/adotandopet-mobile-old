import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StatusBar } from 'react-native';

import FloatLabelInput from '~/components/FloatLabelInput';
import NativeButton from '~/components/NativeButton';

import {
  Container,
  ContentContainer,
  BackIconContainer,
  BackIcon,
  Title,
  Description,
} from './styles';

export default class ForgotPassword extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      goBack: PropTypes.func,
    }).isRequired,
  };

  state = {
    email: '',
  };

  handleNavigate = (route) => {
    const { navigation } = this.props;

    navigation.navigate(route);
  };

  handleInputChange = (id, value) => {
    this.setState({ [id]: value });
  };

  render() {
    const { email } = this.state;
    const {
      navigation: { goBack },
    } = this.props;
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <ContentContainer>
          <BackIconContainer onPress={() => goBack()}>
            <BackIcon />
          </BackIconContainer>
          <Title>Esqueceu sua senha?</Title>
          <Description>
            Insira seu email para te enviarmos as instruções para recuperação de senha!
          </Description>
          <FloatLabelInput
            id="email"
            label="Email"
            value={email}
            onChangeText={this.handleInputChange}
            returnKeyType="send"
            onSubmitEditing={() => this.handleNavigate('SignIn')}
            keyboardType="email-address"
          />
          <NativeButton onPress={() => this.handleNavigate('SignIn')} value="Enviar" />
        </ContentContainer>
      </Container>
    );
  }
}
