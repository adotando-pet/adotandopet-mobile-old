import { createSwitchNavigator } from 'react-navigation';

import Loading from '~/pages/Loading';

import AuthSwitch from './AuthSwitch';
import MainNavigator from './MainNavigator';

const RootSwitch = createSwitchNavigator(
  {
    Loading,
    AuthSwitch,
    MainNavigator,
  },
  {
    initialRouteName: 'MainNavigator',
  },
);

export default RootSwitch;
