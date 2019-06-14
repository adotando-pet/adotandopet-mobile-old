import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { StatusBar } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PetActions from '~/store/ducks/pet';
import AdvertisementActions from '~/store/ducks/advertisement';

import NativeButton from '~/components/NativeButton';

import convertSize from '~/services/convertSize';

import logo from '~/assets/images/signin_logo.png';

import {
  Container,
  ContentContainer,
  BackIconContainer,
  BackIcon,
  Title,
  FormContainer,
  FormSwitchContainer,
  FormSwitchText,
  FormSwitchInput,
  FormLabel,
  FormInput,
  LoadingIndicator,
  NoPetMessage,
  PetContainer,
  PetAvatar,
  InfoContainer,
  NameContainer,
  Name,
  Description,
  GenderIcon,
  GoIcon,
  PetsList,
  SelectPetText,
  CenterContainer,
  FormPetContainer,
  FormPetAvatar,
  FormInfoContainer,
  FormNameContainer,
  FormName,
  FormDescription,
  FormGenderIcon,
} from './styles';

class RegisterAnnounce extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
    pet: PropTypes.shape({
      loading: PropTypes.bool,
    }).isRequired,
    advertisement: PropTypes.shape({
      loading: PropTypes.bool,
    }).isRequired,
    getPetRequest: PropTypes.func.isRequired,
    registerAdvertisementRequest: PropTypes.func.isRequired,
  }

  state = {
    isDisabled: false,
    isVacined: true,
    specialCare: false,
    specialCareDescription: '',
    description: 'Essa é uma descrição padrão para não perder tempo diitando',
    loading: false,
    petId: null,
    refreshing: false,
  };

  componentDidMount() {
    const { getPetRequest } = this.props;

    getPetRequest();
  }

  handleInputChange = (id, value) => this.setState({ [id]: value });

  handleSubmit = () => {
    const {
      isDisabled, isVacined, specialCare, specialCareDescription, description, petId,
    } = this.state;

    const { registerAdvertisementRequest } = this.props;

    registerAdvertisementRequest({
      isDisabled,
      isVacined,
      specialCare,
      specialCareDescription: specialCare ? specialCareDescription : null,
      temperament: 'Dócil,Carinhoso,Mimado',
      liveWell: 'Casa,Apartamento,Chácara',
      sociable: 'Cachorros,Gatos,Peixes',
      description,
      pet_id: petId,
    });
  };

  selectPet = petId => this.setState({ petId });

  renderItem = ({ item }) => (
    <PetContainer onPress={() => this.selectPet(item.id)}>
      <Fragment>
        <PetAvatar source={logo} />
        <InfoContainer>
          <NameContainer>
            <GenderIcon gender={item.gender} />
            <Name>{item.name}</Name>
          </NameContainer>
          <Description>
            {item.breed}, {convertSize(item.size)}
          </Description>
        </InfoContainer>
        <GoIcon />
      </Fragment>
    </PetContainer>
  );

  refreshing = () => {
    const { getPetRequest } = this.props;
    this.setState({ refreshing: true });

    getPetRequest();

    this.setState({ refreshing: false });
  };

  renderPetsList = () => {
    const { pet: { data } } = this.props;
    const { refreshing } = this.state;

    return (
      <Fragment>
        <SelectPetText>Selecione um Pet para continuar:</SelectPetText>
        <PetsList
          data={data}
          keyExtractor={item => String(item.id)}
          renderItem={this.renderItem}
          onRefresh={this.refreshing}
          refreshing={refreshing}
        />
      </Fragment>
    );
  }

  renderContent = () => {
    const {
      isDisabled,
      isVacined,
      specialCare,
      specialCareDescription,
      description,
      petId,
    } = this.state;

    const {
      pet: { data },
      advertisement: { loading },
      navigation: { navigate },
    } = this.props;

    if (!data.length) {
      return (
        <Fragment>
          <NoPetMessage>Cadastre pelo menos um Pet para continuar!</NoPetMessage>
          <NativeButton onPress={() => navigate('RegisterPet')} value="Cadastrar Pet" />
        </Fragment>
      );
    }

    if (!petId) {
      return this.renderPetsList();
    }

    const pet = data.find(pets => pets.id === petId);

    return (
      <CenterContainer>
        <FormContainer>
          <FormPetContainer>
            <FormInfoContainer>
              <FormNameContainer>
                <FormGenderIcon gender={pet.gender} />
                <FormName>{pet.name}</FormName>
              </FormNameContainer>
              <FormDescription>
                {pet.breed}, {convertSize(pet.size)}
              </FormDescription>
            </FormInfoContainer>
            <FormPetAvatar source={logo} />
          </FormPetContainer>
          <FormSwitchContainer>
            <FormSwitchText>Seu Pet tem alguma deficiência?</FormSwitchText>
            <FormSwitchInput
              value={isDisabled}
              onValueChange={value => this.handleInputChange('isDisabled', value)}
            />
          </FormSwitchContainer>
          <FormSwitchContainer>
            <FormSwitchText>Seu Pet é vacinado?</FormSwitchText>
            <FormSwitchInput
              value={isVacined}
              onValueChange={value => this.handleInputChange('isVacined', value)}
            />
          </FormSwitchContainer>
          <FormSwitchContainer>
            <FormSwitchText>Seu Pet precisa de cuidados especiais?</FormSwitchText>
            <FormSwitchInput
              value={specialCare}
              onValueChange={value => this.handleInputChange('specialCare', value)}
            />
          </FormSwitchContainer>
          {specialCare && (
            <Fragment>
              <FormLabel>Quais cuidados?</FormLabel>
              <FormInput
                value={specialCareDescription}
                onChangeText={value => this.handleInputChange('specialCareDescription', value)}
              />
            </Fragment>
          )}
          <FormLabel>Descrição</FormLabel>
          <FormInput
            value={description}
            onChangeText={value => this.handleInputChange('description', value)}
            lastField
          />
        </FormContainer>
        <NativeButton onPress={this.handleSubmit} value="Criar" loading={loading} />
      </CenterContainer>
    );
  };

  render() {
    const {
      navigation: { navigate },
      pet: { loading },
    } = this.props;
    const { loading: stateLoading } = this.state;
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <ContentContainer>
          <BackIconContainer onPress={() => navigate('More')}>
            <BackIcon />
          </BackIconContainer>
          <Title>Criar um Anúncio</Title>
          {stateLoading || loading ? <LoadingIndicator /> : this.renderContent()}
        </ContentContainer>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  advertisement: state.advertisement,
  pet: state.pet,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    ...PetActions,
    ...AdvertisementActions,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegisterAnnounce);
