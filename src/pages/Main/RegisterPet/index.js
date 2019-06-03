import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StatusBar } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PetActions from '~/store/ducks/pet';

import NativeButton from '~/components/NativeButton';
import Input from '~/components/Input';

import logo from '~/assets/images/signin_logo.png';

import {
  Container,
  ContentContainer,
  BackIconContainer,
  BackIcon,
  Title,
  FormContainer,
  Avatar,
  FormLabel,
  SizeSelect,
  SexSelect,
  Error,
  FormCastratedContainer,
  FormCastratedText,
  FormCastratedSwitch,
} from './styles';

class RegisterPet extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    pet: PropTypes.shape({
      loading: PropTypes.bool,
    }).isRequired,
    registerPetRequest: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    breed: '',
    error: '',
    size: '',
    sex: '',
    age: '',
    color: '',
    isCastrated: true,
  };

  handleSwitch = value => this.setState({ isCastrated: value });

  handleInputChange = (id, value) => this.setState({ [id]: value, error: false });

  handleRegister = () => {
    const {
      name,
      breed,
      size,
      sex,
      age,
      color,
      isCastrated,
    } = this.state;

    const { registerPetRequest } = this.props;

    if (!name || !breed || !size || !sex || !age || !color) {
      this.setState({ error: 'Por favor, preencha todos os campos para continuar!' });
      return;
    }

    registerPetRequest({
      name,
      gender: sex,
      age,
      color,
      size,
      breed,
      isCastrated,
      category_id: 1,
    });
  };

  render() {
    const {
      navigation: { navigate },
      pet: { loading },
    } = this.props;
    const {
      name, breed, size, error, sex, age, color, isCastrated,
    } = this.state;
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <ContentContainer>
          <BackIconContainer onPress={() => navigate('More')}>
            <BackIcon />
          </BackIconContainer>
          <Title>Conte-nos um pouco sobre seu amigo</Title>
          <FormContainer>
            <Avatar source={logo} />
            <FormLabel>Nome</FormLabel>
            <Input
              id="name"
              placeholder="Insira aqui o Nome do Pet"
              autoCapitalize="words"
              value={name}
              onChangeText={this.handleInputChange}
            />
            <FormLabel>Idade</FormLabel>
            <Input
              id="age"
              placeholder="Insira aqui a Idade do Pet (em anos)"
              autoCapitalize="words"
              value={age}
              onChangeText={this.handleInputChange}
            />
            <FormLabel>Cor</FormLabel>
            <Input
              id="color"
              placeholder="Insira aqui a Cor do Pet"
              autoCapitalize="words"
              value={color}
              onChangeText={this.handleInputChange}
            />
            <FormLabel>Raça</FormLabel>
            <Input
              id="breed"
              placeholder="Insira aqui a Raça do Pet"
              autoCapitalize="words"
              value={breed}
              onChangeText={this.handleInputChange}
            />
            <FormLabel>Tamanho</FormLabel>
            <SizeSelect
              onValueChange={(value) => {
                this.setState({
                  size: value,
                });
              }}
              value={size}
            />
            <FormLabel>Sexo</FormLabel>
            <SexSelect
              onValueChange={(value) => {
                this.setState({
                  sex: value,
                });
              }}
              value={sex}
            />
            <FormCastratedContainer>
              <FormCastratedText>
                Seu Pet é Castrado?
              </FormCastratedText>
              <FormCastratedSwitch value={isCastrated} onValueChange={this.handleSwitch} />
            </FormCastratedContainer>
          </FormContainer>
          {!!error && <Error>{error}</Error>}
          <NativeButton onPress={this.handleRegister} value="Cadastrar" loading={loading} />
        </ContentContainer>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  pet: state.pet,
});

const mapDispatchToProps = dispatch => bindActionCreators(PetActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegisterPet);
