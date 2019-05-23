import { createBottomTabNavigator } from 'react-navigation';

import Favorites from '~/pages/Main/Favorites';
import Adoptions from '~/pages/Main/Adoptions';
import Chat from '~/pages/Main/Chat';
import More from '~/pages/Main/More';

import { colors, fonts } from '~/styles';

import HomeStack from './HomeStack';

const routes = {
  HomeStack,
  Adoptions,
  Favorites,
  Chat,
  More,
};

const settings = {
  initialRouteName: 'HomeStack',
};

const MainNavigator = createBottomTabNavigator(routes, {
  tabBarOptions: {
    activeTintColor: colors.white,
    inactiveTintColor: colors.mediumWhiteTransparent,
    style: {
      height: 70,
      backgroundColor: colors.primary,
      borderTopWidth: 0,
    },
    labelStyle: {
      fontSize: fonts.small,
    },
  },
  ...settings,
});

export default MainNavigator;
