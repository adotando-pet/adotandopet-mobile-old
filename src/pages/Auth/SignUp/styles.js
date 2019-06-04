import styled from 'styled-components/native';

import { Platform } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Touchable from 'react-native-platform-touchable';

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
  flex: 1;
  justify-content: center;
  padding: 0 ${metrics.basePadding}px;
`;

export const BackIconContainer = styled.TouchableOpacity`
  position: absolute;
  top: ${metrics.headerMargin};
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
  color: ${colors.white};
  margin-bottom: ${metrics.baseMargin * 2};
  text-align: center;
`;

export const FormContainer = styled.View`
  padding: ${metrics.basePadding}px;
  background-color: ${colors.white};
  border-radius: ${metrics.baseRadius};
  margin-bottom: ${metrics.baseMargin * 2};
`;

export const FormLabel = styled.Text`
  font-size: ${fonts.small};
  color: ${colors.black};
  margin-bottom: ${metrics.baseMargin / 2};
`;

export const FormInput = styled.TextInput`
  font-size: ${fonts.medium};
  padding: ${metrics.basePadding / 2}px 0;
  margin-bottom: ${metrics.baseMargin};
  color: ${colors.secundary};
`;

export const FormNotificationContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const FormNotificationText = styled.Text`
  flex: 1;
  font-size: ${fonts.small};
`;

export const FormNotificationSwitch = styled.Switch.attrs({
  trackColor: {
    true: colors.secundary,
  },
})`
  margin-left: ${metrics.baseMargin};
`;

export const Error = styled.Text`
  font-size: ${fonts.small};
  color: ${colors.danger};
  text-align: center;
  margin-bottom: ${metrics.baseMargin * 2};
  font-weight: bold;
`;

export const SigninLinkContainer = styled(Touchable).attrs({
  background: Touchable.Ripple(colors.secundary),
})``;

export const SigninLinkContent = styled.View`
  padding: ${metrics.basePadding / 2}px ${metrics.basePadding}px;
  flex-direction: row;
  margin-top: 15px;
  justify-content: center;
`;

export const SigninLinkText = styled.Text`
  margin-left: 5;
  color: ${colors.white};
  font-size: ${fonts.medium};
  font-weight: ${props => (props.featured ? 'bold' : 'normal')};
`;
