import { createStackNavigator } from 'react-navigation-stack';

import Privacy from '~/pages/Auth/Privacy';

import SignIn from '~/pages/Auth/SignIn';
import ForgotPassword from '~/pages/Auth/ForgotPassword';

const SignInStack = createStackNavigator(
  {
    SignIn,
    ForgotPassword,
    Privacy,
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
  },
);

export default SignInStack;
