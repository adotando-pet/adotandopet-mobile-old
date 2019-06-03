import React from 'react';

import { StatusBar } from 'react-native';

import {
  Container,
  ContentContainer,
  Title,
  WarningContainer,
  WarningIcon,
  WarningText,
} from './styles';

const MyAnnounces = () => (
  <Container>
    <StatusBar barStyle="light-content" />
    <ContentContainer>
      <Title>Meus Anúncios</Title>
      <WarningContainer>
        <WarningIcon />
        <WarningText>Em construção...</WarningText>
      </WarningContainer>
    </ContentContainer>
  </Container>
);

export default MyAnnounces;
