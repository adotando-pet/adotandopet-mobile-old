import React from 'react';
import PropTypes from 'prop-types';

import { StatusBar } from 'react-native';

import TabBarIcon from '~/components/TabBarIcon';

import {
  Container,
  ContentContainer,
  Title,
  WarningContainer,
  WarningIcon,
  WarningText,
} from './styles';

const Favorites = () => (
  <Container>
    <StatusBar barStyle="light-content" />
    <ContentContainer>
      <Title>Favoritos</Title>
      <WarningContainer>
        <WarningIcon />
        <WarningText>Em construção...</WarningText>
      </WarningContainer>
    </ContentContainer>
  </Container>
);

const TabIcon = ({ tintColor, focused }) => (
  <TabBarIcon name="ios-heart" focused={focused} color={tintColor} />
);
TabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
  focused: PropTypes.bool.isRequired,
};

Favorites.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarLabel: 'Favoritos',
    tabBarIcon: TabIcon,
    tabBarVisible,
  };
};

export default Favorites;
