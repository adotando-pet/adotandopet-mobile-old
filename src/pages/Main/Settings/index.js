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

const Settings = ({ navigation }) => (
  <Container>
    <StatusBar barStyle="light-content" />
    <ContentContainer>
      <BackIconContainer onPress={() => navigation.goBack()}>
        <BackIcon />
      </BackIconContainer>
      <Title>Configurações</Title>
      <WarningContainer>
        <WarningIcon />
        <WarningText>Em construção...</WarningText>
      </WarningContainer>
    </ContentContainer>
  </Container>
);

Settings.navigationOptions = {
  header: null,
};

Settings.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default Settings;
