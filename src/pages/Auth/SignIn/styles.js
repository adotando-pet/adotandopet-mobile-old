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
  align-items: center;
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

export const Logo = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: ${metrics.screenWidth * 0.4}px;
  height: ${metrics.screenWidth * 0.4}px;
  margin-bottom: ${metrics.baseMargin * 5}px;
`;

export const ForgotPasswordLink = styled.TouchableOpacity`
  align-self: flex-end;
  margin-top: ${metrics.baseMargin}px;
  margin-bottom: ${metrics.baseMargin * 2}px;
  padding-left: ${metrics.basePadding / 2};
`;

export const ForgotPasswordText = styled.Text`
  color: ${colors.white};
  font-size: ${fonts.medium};
`;

export const Error = styled.Text`
  font-size: ${fonts.small};
  color: ${colors.danger};
  text-align: center;
  margin-bottom: ${metrics.baseMargin * 2};
  font-weight: bold;
`;

export const SignupLinkContainer = styled.TouchableWithoutFeedback`
  align-self: center;
`;

export const SignupLinkContent = styled.View`
  padding: ${metrics.basePadding / 2}px ${metrics.basePadding}px;
  flex-direction: row;
  margin-top: 15px;
`;

export const SignupLinkText = styled.Text`
  margin-left: 5;
  color: ${colors.white};
  font-size: ${fonts.medium};
  font-weight: ${props => (props.featured ? 'bold' : 'normal')};
`;

export const TermsLink = styled(Touchable)`
  margin-bottom: ${metrics.baseMargin * 3}px;
  align-self: center;
  padding: ${metrics.basePadding / 2}px ${metrics.basePadding}px;
`;

export const TermsLinkText = styled.Text`
  color: ${colors.white};
  text-decoration: underline;
  text-decoration-color: ${colors.white};
  font-size: ${fonts.small};
`;
