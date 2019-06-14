import React from 'react';
import PropTypes from 'prop-types';
import { createSwitchNavigator } from 'react-navigation';

import More from '~/pages/Main/More';
import RegisterPet from '~/pages/Main/RegisterPet';
import MyPets from '~/pages/Main/MyPets';
import MyAnnounces from '~/pages/Main/MyAnnounces';
import RegisterAnnounce from '~/pages/Main/RegisterAnnounce';
import FindPets from '~/pages/Main/FindPets';

import TabBarIcon from '~/components/TabBarIcon';

const MoreSwitch = createSwitchNavigator(
  {
    More,
    RegisterPet,
    MyPets,
    MyAnnounces,
    RegisterAnnounce,
    FindPets,
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
