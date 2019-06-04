import styled from 'styled-components/native';

import { Platform } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import Icon from 'react-native-vector-icons/Ionicons';

import { colors, metrics, fonts } from '~/styles';

export const Container = styled(LinearGradient).attrs({
  colors: [colors.secundary, colors.primary],
})`
  flex: 1;
`;

export const ContentContainer = styled.KeyboardAvoidingView.attrs({
  behavior: Platform.OS === 'ios' ? 'padding' : null,
})`
  margin-top: ${metrics.headerMargin}px;
  flex: 1;
  align-items: center;
`;

export const BackIconContainer = styled.TouchableOpacity`
  position: absolute;
  top: 0;
  left: 0;
  padding: ${metrics.basePadding / 4}px ${metrics.basePadding / 2}px;
`;

export const BackIcon = styled(Icon).attrs({
  name: Platform.select({
    android: 'md-arrow-round-back',
    ios: 'ios-arrow-round-back',
  }),
})`
  color: ${colors.white};
  font-size: ${fonts.big * 2};
`;

export const Title = styled.Text`
  font-size: ${fonts.big * 2};
  font-weight: bold;
  text-align: center;
  color: ${colors.white};
  margin-bottom: ${metrics.baseMargin * 3};
`;

export const WarningContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const WarningIcon = styled(Icon).attrs({
  name: Platform.select({
    ios: 'ios-construct',
    android: 'md-construct',
  }),
})`
  margin-right: ${metrics.baseMargin * 2};
  font-size: ${fonts.bigger * 4};
  color: ${colors.white};
`;

export const WarningText = styled.Text`
  color: ${colors.white};
  font-size: ${fonts.bigger * 1.5};
  font-weight: bold;
`;
