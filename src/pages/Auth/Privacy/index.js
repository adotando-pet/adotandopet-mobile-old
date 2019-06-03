import React from 'react';
import PropTypes from 'prop-types';

import { StatusBar } from 'react-native';

import {
  Container,
  ContentContainer,
  BackIconContainer,
  BackIcon,
  Title,
  DescriptionContainer,
  DescriptionText,
} from './styles';

const Privacy = ({ navigation }) => (
  <Container>
    <StatusBar barStyle="light-content" />
    <ContentContainer>
      <BackIconContainer onPress={() => navigation.goBack()}>
        <BackIcon />
      </BackIconContainer>
      <Title>Privacidade & Termos de Uso</Title>
      <DescriptionContainer>
        <DescriptionText>batatinha</DescriptionText>
      </DescriptionContainer>
    </ContentContainer>
  </Container>
);

Privacy.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }).isRequired,
};

export default Privacy;
