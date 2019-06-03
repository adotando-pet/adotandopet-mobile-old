import React from 'react';
import PropTypes from 'prop-types';
import { createSwitchNavigator } from 'react-navigation';

import More from '~/pages/Main/More';
import RegisterPet from '~/pages/Main/RegisterPet';

import TabBarIcon from '~/components/TabBarIcon';

const MoreSwitch = createSwitchNavigator(
  {
    More,
    RegisterPet,
  },
  {
    initialRouteName: 'More',
  },
);

const TabIcon = ({ tintColor, focused }) => (
  <TabBarIcon name="ios-more" focused={focused} color={tintColor} />
);

TabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
  focused: PropTypes.bool.isRequired,
};

MoreSwitch.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarLabel: 'Mais',
    tabBarIcon: TabIcon,
    tabBarVisible,
  };
};

export default MoreSwitch;
