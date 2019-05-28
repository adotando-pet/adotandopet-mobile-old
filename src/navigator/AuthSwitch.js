import { createSwitchNavigator } from 'react-navigation';

import SignUp from '~/pages/Auth/SignUp';

import SignInStack from './SignInStack';

const AuthSwitch = createSwitchNavigator({
  SignInStack,
  SignUp,
});

export default AuthSwitch;
