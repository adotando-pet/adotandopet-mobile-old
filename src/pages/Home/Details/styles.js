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
  margin-top: ${metrics.headerMargin}px;
  flex: 1;
  align-items: center;
  padding: ${metrics.basePadding}px;
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
  margin-top: ${metrics.baseMargin * 2};
  font-size: ${fonts.big * 2};
  font-weight: bold;
  text-align: center;
  color: ${colors.white};
  margin-bottom: ${metrics.baseMargin};
`;

export const Card = styled.View`
  padding: ${metrics.basePadding}px;
  background: ${colors.white};
  border-radius: ${metrics.baseRadius};
  align-self: stretch;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${metrics.baseMargin * 2}px;
`;

export const Image = styled.Image.attrs({
  resize: 'cover',
})`
  width: ${metrics.screenWidth * 0.2}px;
  height: ${metrics.screenWidth * 0.2}px;
`;

export const Address = styled.View`
  flex-direction: row;
  padding-bottom: ${metrics.basePadding};
`;

export const AddressDescription = styled.Text`
  flex: 1;
  font-size: ${fonts.big};
  color: ${colors.black};
`;

export const NameContainer = styled.View``;

export const NameDescription = styled.Text`
  font-size: ${fonts.big};
  color: ${colors.black};
`;

export const NameText = styled.Text`
  font-size: ${fonts.big};
  color: ${colors.black};
`;

export const AnimalInformation = styled.View``;

export const SpecialCareContainer = styled.View`
  border-bottom-width: 1;
  border-bottom-color: ${colors.lighter};
  margin-bottom: ${metrics.baseMargin};
`;

export const SpecialCareContentContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const InfoContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 1;
  border-bottom-color: ${colors.lighter};
  margin-bottom: ${metrics.baseMargin};
`;

export const InfoDescription = styled.Text`
  font-size: ${fonts.big};
  color: ${colors.darker};
  margin-bottom: ${metrics.baseMargin};
`;

export const PositiveIcon = styled(Icon).attrs({
  name: Platform.select({
    android: 'md-checkmark',
    ios: 'ios-checkmark',
  }),
})`
  font-size: ${fonts.big * 2};
  color: ${colors.success};
`;

export const NegativeIcon = styled(Icon).attrs({
  name: Platform.select({
    android: 'md-close',
    ios: 'ios-close',
  }),
})`
  font-size: ${fonts.big * 2};
  color: ${colors.danger};
`;

export const SpecialText = styled.Text`
  font-size: ${fonts.medium};
  color: ${colors.regular};
  margin-left: ${metrics.baseMargin}px;
  margin-right: ${metrics.baseMargin}px;
  margin-bottom: ${metrics.baseMargin}px;
`;

export const ButtonContainer = styled(Touchable).attrs({
  background: Touchable.Ripple(colors.secundary),
})`
  align-self: stretch;
  background-color: ${colors.buttonPrimary};
  border-radius: ${metrics.baseRadius};
  margin-top: ${metrics.baseMargin}px;
  padding: ${metrics.basePadding / 2}px;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: ${colors.white};
  font-size: ${fonts.big};
`;

export const ButtonLoading = styled.ActivityIndicator.attrs({
  size: 'small',
  color: colors.white,
})``;

export const LoginButton = styled(Touchable)``;

export const LoginText = styled.Text`
  font-size: ${fonts.small};
  color: ${colors.light};
  text-align: center;
  margin-top: ${metrics.baseMargin};
`;
