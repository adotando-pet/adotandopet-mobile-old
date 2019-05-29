import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StatusBar } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AuthActions from '~/store/ducks/auth';

import FloatLabelInput from '~/components/FloatLabelInput';
import NativeButton from '~/components/NativeButton';

import {
  Container,
  ContentContainer,
  BackIconContainer,
  BackIcon,
  Title,
  Description,
  Error,
} from './styles';

class ForgotPassword extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      goBack: PropTypes.func,
    }).isRequired,
  };

  state = {
    email: '',
    error: '',
  };

  handleSubmit = () => {
    const {
      email,
    } = this.state;

    const { forgotPasswordRequest } = this.props;

    if (!email) {
      this.setState({ error: 'Por favor, preencha seu email para continuar!' });
      return;
    }

    forgotPasswordRequest({ email });
  }

  handleInputChange = (id, value) => {
    this.setState({ [id]: value });
  };

  render() {
    const { email, error } = this.state;
    const {
      navigation: { goBack },
      auth: { loading },
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
            onSubmitEditing={() => navigation.navigate('SignIn')}
            keyboardType="email-address"
          />
          { !!error && <Error>{error}</Error> }
          <NativeButton onPress={this.handleSubmit} value="Enviar" loading={loading} />
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
)(ForgotPassword);
