import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import logo from '~/assets/images/signin_logo.png';

import {
  Container,
  Card,
  TitleContainer,
  Image,
  NameContainer,
  NameDescription,
  NameText,
  Address,
  CepDescription,
  AddressDescription,
  AnimalInformation,
  Shared,
  SharedDescription,
  Castred,
  CastredDescription,
  Vascinated,
  VascinatedDescription,
  Special,
  SpecialDescription,
  SpecialContent,
  SpecialText,
  Lives,
  LivesDescription,
  Sociable,
  SociableDescription,
  BackIconContainer,
  BackIcon,
  Title,
} from './styles';

const Details = ({ navigation }) => (
  <Container>
    <BackIconContainer onPress={() => navigation.goBack()}>
      <BackIcon />
    </BackIconContainer>
    <Title>Detalhes</Title>
    <Card>
      <TitleContainer>
        <Image source={logo} />
        <NameContainer>
          <NameText>Scooby Doo</NameText>
          <NameDescription>Pug, small</NameDescription>
        </NameContainer>
      </TitleContainer>
      <Address>
        <CepDescription>03047-000</CepDescription>
        <AddressDescription>Rua 21 de Abril, Brás</AddressDescription>
      </Address>
      <AnimalInformation>
        <Shared>
          <SharedDescription>Shared guard?</SharedDescription>
          <Icon name="done" size={12} color="black" />
        </Shared>
        <Castred>
          <CastredDescription>Castred</CastredDescription>
          <Icon name="done" size={12} color="black" />
        </Castred>
        <Vascinated>
          <VascinatedDescription>Vascinated</VascinatedDescription>
          <Icon name="clear" size={12} color="black" />
        </Vascinated>
        <Special>
          <SpecialContent>
            <SpecialDescription>Special cares</SpecialDescription>
            <Icon name="done" size={12} color="black" />
          </SpecialContent>
          <SpecialText>N/A</SpecialText>
        </Special>
        <Lives>
          <LivesDescription>Lives well</LivesDescription>
          <Icon name="clear" size={10} color="black" />
        </Lives>
        <Sociable>
          <SociableDescription>Sociable</SociableDescription>
          <Icon name="done" size={10} color="black" />
        </Sociable>
      </AnimalInformation>
    </Card>
  </Container>
);

Details.navigationOptions = {
  header: null,
};

export default Details;
