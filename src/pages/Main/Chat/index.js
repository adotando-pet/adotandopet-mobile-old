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

const Chat = () => (
  <Container>
    <StatusBar barStyle="light-content" />
    <ContentContainer>
      <Title>Conversas</Title>
      <WarningContainer>
        <WarningIcon />
        <WarningText>Em construção...</WarningText>
      </WarningContainer>
    </ContentContainer>
  </Container>
);

const TabIcon = ({ tintColor, focused }) => (
  <TabBarIcon name="ios-chatbubbles" focused={focused} color={tintColor} />
);
TabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
  focused: PropTypes.bool.isRequired,
};

Chat.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarLabel: 'Chat',
    tabBarIcon: TabIcon,
    tabBarVisible,
  };
};

export default Chat;
