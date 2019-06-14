import React from 'react';
import PropTypes from 'prop-types';

import { StatusBar } from 'react-native';

import {
  Container,
  ContentContainer,
  BackIconContainer,
  BackIcon,
  Title,
  WarningContainer,
  WarningIcon,
  WarningText,
} from './styles';

const FindPets = ({ navigation }) => (
  <Container>
    <StatusBar barStyle="light-content" />
    <ContentContainer>
      <BackIconContainer onPress={() => navigation.navigate('More')}>
        <BackIcon />
      </BackIconContainer>
      <Title>Encontrar Pet</Title>
      <WarningContainer>
        <WarningIcon />
        <WarningText>Em construção...</WarningText>
      </WarningContainer>
    </ContentContainer>
  </Container>
);

FindPets.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default FindPets;
