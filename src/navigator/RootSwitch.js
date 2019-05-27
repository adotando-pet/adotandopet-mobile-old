import { createSwitchNavigator } from 'react-navigation';

import AuthSwitch from './AuthSwitch';
import MainNavigator from './MainNavigator';

const RootSwitch = createSwitchNavigator(
  {
    AuthSwitch,
    MainNavigator,
  },
  {
    initialRouteName: 'AuthSwitch',
  },
);

export default RootSwitch;
