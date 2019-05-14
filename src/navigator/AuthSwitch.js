import { createSwitchNavigator } from 'react-navigation';

import SignUp from '~/pages/Auth/SignUp';

import SignInStack from './SignInStack';

const AuthSwitch = createSwitchNavigator({
  SignUp,
  SignInStack,
});

export default AuthSwitch;
