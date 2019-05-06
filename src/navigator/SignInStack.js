import { createStackNavigator } from 'react-navigation';

import SignIn from '~/pages/Auth/SignIn';
import ForgotPassword from '~/pages/Auth/ForgotPassword';

const SignInStack = createStackNavigator({
  SignIn,
  ForgotPassword,
});

export default SignInStack;
