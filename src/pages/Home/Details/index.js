import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
} from './styles';

const Details = () => (
  <Container>
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
        <AddressDescription>Rua 21 de Abril, Brás</AdressDescription>
      </Address>
      <AnimalInformation>
        <Shared>
          <SharedDescription>Shared guard?</SharedDescription>
          <Icon />
        </Shared>
        <Castred>
          <CastredDescription>Castred</CastredDescription>
          <Icon />
        </Castred>
        <Vascinated>
          <VascinatedDescription>Vascinated</VascinatedDescription>
          <Icon />
        </Vascinated>
      </AnimalInformation>
    </Card>
  </Container>
);

export default Details;
