import React from 'react';
import PropTypes from 'prop-types';
import { createStackNavigator } from 'react-navigation-stack';

import Announce from '~/pages/Home/Announce';
import Search from '~/pages/Home/Search';
import Details from '~/pages/Home/Details';
import Settings from '~/pages/Main/Settings';

import TabBarIcon from '~/components/TabBarIcon';

const HomeStack = createStackNavigator(
  {
    Announce,
    Search,
    Details,
    Settings,
  },
  {
    initialRouteName: 'Announce',
  }
);

const TabIcon = ({ tintColor, focused }) => (
  <TabBarIcon name="ios-list" focused={focused} color={tintColor} />
);
TabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
  focused: PropTypes.bool.isRequired,
};

const DrawerIcon = ({ tintColor, focused }) => (
  <TabBarIcon name="md-list" focused={focused} color={tintColor} />
);
DrawerIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
  focused: PropTypes.bool.isRequired,
};

HomeStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarLabel: 'Anúncios',
    tabBarIcon: TabIcon,
    tabBarVisible,
    drawerLabel: 'Anúncios',
    drawerIcon: DrawerIcon,
  };
};

export default HomeStack;
