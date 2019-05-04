import { createStackNavigator } from 'react-navigation';

import Main from '~/pages/Home/Main';
import Search from '~/pages/Home/Search';
import Details from '~/pages/Home/Details';

const HomeStack = createStackNavigator(
  {
    Main,
    Search,
    Details,
  },
  {
    initialRouteName: 'Main',
  },
);

export default HomeStack;
