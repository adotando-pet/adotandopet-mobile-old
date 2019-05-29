import React from 'react';

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
  SharedIcon,
  Castred,
  CastredDescription,
  CastredIcon,
  Vascinated,
  VascinatedDescription,
  VascinatedIcon,
  Special,
  SpecialDescription,
  SpecialContent,
  SpecialText,
  SpecialIcon,
  Lives,
  LivesDescription,
  LivesIcon,
  Sociable,
  SociableDescription,
  SociableIcon,
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
          <SharedIcon />
        </Shared>
        <Castred>
          <CastredDescription>Castred</CastredDescription>
          <CastredIcon />
        </Castred>
        <Vascinated>
          <VascinatedDescription>Vascinated</VascinatedDescription>
          <VascinatedIcon />
        </Vascinated>
        <Special>
          <SpecialContent>
            <SpecialDescription>Special cares</SpecialDescription>
            <SpecialIcon />
          </SpecialContent>
          <SpecialText>Lorem ipsum</SpecialText>
        </Special>
        <Lives>
          <LivesDescription>Lives well</LivesDescription>
          <LivesIcon />
        </Lives>
        <Sociable>
          <SociableDescription>Sociable</SociableDescription>
          <SociableIcon />
        </Sociable>
      </AnimalInformation>
    </Card>
  </Container>
);

Details.navigationOptions = {
  header: null,
};

export default Details;
