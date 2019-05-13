import styled from 'styled-components/native';

import { Platform } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

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
`;

export const HeaderContainer = styled.View``;

export const HeaderTitle = styled.Text``;

export const FormContainer = styled.View``;

export const FormLabel = styled.Text``;

export const FormInput = styled.TextInput``;

export const FormNotificationContainer = styled.View``;

export const FormNotificationText = styled.Text``;

export const FormNotificationSwitch = styled.Switch``;

export const SigninLinkContainer = styled.TouchableWithoutFeedback`
  align-self: center;
`;

export const SigninLinkContent = styled.View`
  padding: ${metrics.basePadding / 2}px ${metrics.basePadding}px;
  flex-direction: row;
  margin-top: 15px;
`;

export const SigninLinkText = styled.Text`
  margin-left: 5;
  color: ${colors.white};
  font-size: ${fonts.medium};
  font-weight: ${props => (props.featured ? 'bold' : 'normal')};
`;
