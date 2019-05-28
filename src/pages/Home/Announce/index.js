import React from 'react';

import { StatusBar } from 'react-native';

import SearchBar from '~/components/SearchBar';

import logo from '~/assets/images/signin_logo.png';

import {
  Container,
  ContentContainer,
  CardContainer,
  TitleContainer,
  Image,
  NameContainer,
  NameText,
  NameDescription,
  TagContainer,
  TagDescription,
  Description,
  CardButton,
} from './styles';

const Announce = ({ navigation }) => (
  <Container>
    <StatusBar barStyle="light-content" />
    <SearchBar />

    <ContentContainer>
      <CardButton onPress={() => navigation.navigate('Details')}>
        <CardContainer>
          <TitleContainer>
            <Image source={logo} />
            <NameContainer>
              <NameText>Scooby Doo</NameText>
              <NameDescription>Pug, small</NameDescription>
            </NameContainer>
          </TitleContainer>
          <TagContainer>
            <TagDescription>Dócil</TagDescription>
          </TagContainer>
          <Description>No special cares.</Description>
        </CardContainer>
      </CardButton>
    </ContentContainer>
  </Container>
);

Announce.navigationOptions = {
  header: null,
};

export default Announce;
