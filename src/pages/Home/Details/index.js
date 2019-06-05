import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StatusBar } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AdoptionActions from '~/store/ducks/adoption';

import convertSize from '~/services/convertSize';

import logo from '~/assets/images/signin_logo.png';

import {
  Container,
  ContentContainer,
  Card,
  TitleContainer,
  Image,
  PetInfoContainer,
  NameContainer,
  GenderIcon,
  NameText,
  NameDescription,
  Address,
  AddressDescription,
  AnimalInformation,
  SpecialCareContainer,
  SpecialCareContentContainer,
  InfoContainer,
  InfoDescription,
  PositiveIcon,
  NegativeIcon,
  SpecialText,
  BackIconContainer,
  BackIcon,
  Title,
  ButtonContainer,
  ButtonText,
  ButtonLoading,
  LoginButton,
  LoginText,
} from './styles';

class Details extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
      goBack: PropTypes.func,
      state: PropTypes.shape({
        params: PropTypes.shape({
          data: PropTypes.shape({
            pet: PropTypes.shape({
              name: PropTypes.string,
              breed: PropTypes.string,
              size: PropTypes.string,
              user: PropTypes.shape({
                address: PropTypes.shape({
                  zip: PropTypes.number,
                  street: PropTypes.string,
                  district: PropTypes.string,
                }),
              }),
            }),
            specialCare: PropTypes.bool,
            specialCareDescription: PropTypes.string,
            isCastrated: PropTypes.bool,
            isVacined: PropTypes.bool,
            liveWell: PropTypes.string,
            sociable: PropTypes.string,
          }),
        }),
      }),
    }).isRequired,
    auth: PropTypes.shape({
      token: PropTypes.string,
      data: PropTypes.shape({
        id: PropTypes.number,
      }),
      loading: PropTypes.bool,
    }).isRequired,
    registerAdoptionRequest: PropTypes.func.isRequired,
  };

  static navigationOptions = {
    header: null,
  };

  handleAdoption = () => {
    const {
      registerAdoptionRequest,
      navigation: { state: { params: { data: { id } } } },
    } = this.props;

    registerAdoptionRequest({ id });
  };

  render() {
    const {
      navigation: {
        goBack,
        state: {
          params: { data },
        },
        navigate,
      },
      auth: {
        token,
        data: { id: userId },
        loading,
      },
    } = this.props;
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <ContentContainer>
          <BackIconContainer onPress={() => goBack()}>
            <BackIcon />
          </BackIconContainer>
          <Title>Detalhes</Title>
          <Card>
            <TitleContainer>
              <Image source={logo} />
              <PetInfoContainer>
                <NameContainer>
                  <GenderIcon gender={data.pet.gender} />
                  <NameText>{data.pet.name}</NameText>
                </NameContainer>
                <NameDescription>{data.pet.breed}, {convertSize(data.pet.size)}</NameDescription>
              </PetInfoContainer>
            </TitleContainer>
            <Address>
              <AddressDescription>{data.description}</AddressDescription>
            </Address>
            <AnimalInformation>
              <InfoContainer>
                <InfoDescription>Cadastrado</InfoDescription>
                {data.pet.isCastrated ? <PositiveIcon /> : <NegativeIcon />}
              </InfoContainer>
              <InfoContainer>
                <InfoDescription>Vacinado</InfoDescription>
                {data.isVacined ? <PositiveIcon /> : <NegativeIcon />}
              </InfoContainer>
              <SpecialCareContainer>
                <SpecialCareContentContainer>
                  <InfoDescription>Necessidades Especiais</InfoDescription>
                  {data.specialCare ? <PositiveIcon /> : <NegativeIcon />}
                </SpecialCareContentContainer>
                {data.specialCare && <SpecialText>{data.specialCareDescription}</SpecialText>}
              </SpecialCareContainer>
              <SpecialCareContainer>
                <SpecialCareContentContainer>
                  <InfoDescription>Características</InfoDescription>
                </SpecialCareContentContainer>
                <SpecialText>{data.temperament}</SpecialText>
              </SpecialCareContainer>
              <SpecialCareContainer>
                <SpecialCareContentContainer>
                  <InfoDescription>Vive Bem</InfoDescription>
                </SpecialCareContentContainer>
                <SpecialText>{data.liveWell}</SpecialText>
              </SpecialCareContainer>
              <SpecialCareContainer>
                <SpecialCareContentContainer>
                  <InfoDescription>Sociável Com</InfoDescription>
                </SpecialCareContentContainer>
                <SpecialText>{data.sociable}</SpecialText>
              </SpecialCareContainer>
            </AnimalInformation>
            {(!token && (
              <LoginButton onPress={() => navigate('SignIn')}>
                <LoginText>*Para adotar esse pet você precisa fazer Login!</LoginText>
              </LoginButton>
            ))
              || (userId !== data.pet.user.id && (
                <ButtonContainer onPress={!loading ? this.handleAdoption : null}>
                  {!loading ? <ButtonText>Quero Adotar!</ButtonText> : <ButtonLoading />}
                </ButtonContainer>
              )) || <LoginText>Você não pode interagir no seu anúncio!</LoginText>}
          </Card>
        </ContentContainer>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  adoption: state.adoption,
});

const mapDispatchToProps = dispatch => bindActionCreators(AdoptionActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Details);
