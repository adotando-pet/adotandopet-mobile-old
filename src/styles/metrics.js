import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
  basePadding: 20,
  baseMargin: 10,
  baseRadius: 5,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  headerMargin: Platform.OS === 'ios' ? 20 : 0,
};
