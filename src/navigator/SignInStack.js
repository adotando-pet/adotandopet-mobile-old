import { createStackNavigator } from 'react-navigation';

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
    initialRouteName: 'SignIn',
  },
);

export default SignInStack;
