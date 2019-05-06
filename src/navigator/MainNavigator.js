import { Platform } from 'react-native';
import { createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';

import Settings from '~/pages/Main/Settings';
import Favorites from '~/pages/Main/Favorites';
import Adoptions from '~/pages/Main/Adoptions';
import Announce from '~/pages/Main/Announce';

import HomeStack from './HomeStack';

const routes = {
  HomeStack,
  Favorites,
  Adoptions,
  Announce,
  Settings,
};

const settings = {
  initialRouteName: 'HomeStack',
};

const MainNavigator = Platform.select({
  ios: createBottomTabNavigator(routes, settings),
  android: createDrawerNavigator(routes, settings),
});

export default MainNavigator;
