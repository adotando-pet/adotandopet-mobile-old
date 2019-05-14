import { Dimensions, Platform } from 'react-native';

import { getStatusBarHeight } from 'react-native-status-bar-height';

const { width, height } = Dimensions.get('window');

export default {
  basePadding: 20,
  baseMargin: 10,
  baseRadius: 5,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  headerMargin: getStatusBarHeight(),
};
