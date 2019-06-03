import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StatusBar } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PetActions from '~/store/ducks/pet';

import convertSize from '~/services/convertSize';

import logo from '~/assets/images/signin_logo.png';

import {
  Container,
  ContentContainer,
  BackIconContainer,
  BackIcon,
  Title,
  EmptyText,
  PetContainer,
  PetAvatar,
  InfoContainer,
  NameContainer,
  Name,
  Description,
  GenderIcon,
  ButtonsContainer,
  MoreButton,
  MoreIcon,
  AnnounceButton,
  AnnounceText,
  PetsList,
} from './styles';

class MyPets extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      goBack: PropTypes.func,
    }).isRequired,
    getPetRequest: PropTypes.func.isRequired,
    pet: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        gender: PropTypes.string,
        size: PropTypes.string,
        breed: PropTypes.string,
        id: PropTypes.number,
      })),
    }).isRequired,
  };

  state = {
    refreshing: false,
  };

  componentDidMount() {
    this.loadData();
  }

  refreshing = () => {
    this.setState({ refreshing: true });

    this.loadData();

    this.setState({ refreshing: false });
  };

  loadData = () => {
    const { getPetRequest } = this.props;

    getPetRequest();
  };

  renderItem = ({ item }) => (
    <PetContainer>
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
      <ButtonsContainer>
        <MoreButton onPress={() => {}}>
          <MoreIcon />
        </MoreButton>
        <AnnounceButton onPress={() => {}}>
          <AnnounceText>Anunciar</AnnounceText>
        </AnnounceButton>
      </ButtonsContainer>
    </PetContainer>
  );

  renderContent = () => {
    const {
      pet: { data },
    } = this.props;

    const { refreshing } = this.state;

    return data.length ? (
      <PetsList
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderItem}
        onRefresh={this.refreshing}
        refreshing={refreshing}
      />
    ) : (
      <EmptyText>Nenhum Pet cadastrado</EmptyText>
    );
  };

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <ContentContainer>
          <BackIconContainer onPress={() => navigation.navigate('More')}>
            <BackIcon />
          </BackIconContainer>
          <Title>Meus Pets</Title>
          {this.renderContent()}
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
)(MyPets);
