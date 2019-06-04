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

export const FormContainer = styled.View`
  align-self: stretch;
  padding: ${metrics.basePadding}px;
  background-color: ${colors.white};
  border-radius: ${metrics.baseRadius};
  margin-bottom: ${metrics.baseMargin * 2};
`;

export const FormLabel = styled.Text`
  font-size: ${fonts.medium};
  color: ${colors.darker};
  margin-bottom: ${metrics.baseMargin};
`;

export const FormSwitchContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: ${metrics.basePadding};
  padding-bottom: ${metrics.basePadding};
  border-bottom-width: 1;
  border-bottom-color: ${colors.light};
`;

export const FormSwitchText = styled.Text`
  flex: 1;
  font-size: ${fonts.medium};
  color: ${colors.darker};
`;

export const FormSwitchInput = styled.Switch.attrs({
  trackColor: {
    true: colors.secundary,
  },
})`
  margin-left: ${metrics.baseMargin};
`;

export const FormInput = styled.TextInput`
  border-width: 1;
  border-color: ${colors.light};
  padding: ${metrics.basePadding / 2}px;
  border-radius: ${metrics.baseRadius};
  margin-bottom: ${({ lastField }) => (!lastField ? metrics.basePadding : 0)};
`;

export const LoadingIndicator = styled.ActivityIndicator.attrs({
  size: 'large',
  color: colors.white,
})`
  align-self: center;
  margin-top: ${metrics.baseMargin * 2};
`;

export const NoPetMessage = styled.Text`
  color: ${colors.white};
  text-align: center;
  font-size: ${fonts.medium};
  margin-top: ${metrics.baseMargin};
  margin-bottom: ${metrics.baseMargin * 2};
`;

export const PetContainer = styled(Touchable)`
  align-self: stretch;
  flex-direction: row;
  align-items: center;
  margin-bottom: ${metrics.baseMargin};
  background-color: ${colors.white};
  border-radius: ${metrics.baseRadius};
  padding: ${metrics.basePadding}px;
`;

export const PetAvatar = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 60;
  height: 60;
  margin-right: ${metrics.baseMargin};
`;

export const InfoContainer = styled.View`
  flex: 1;
`;

export const NameContainer = styled.View`
  flex-direction: row;
  margin-bottom: ${metrics.baseMargin / 2};
  align-items: center;
`;

export const GenderIcon = styled(Icon).attrs(({ gender }) => ({
  name: Platform.select({
    ios: `ios-${gender === 'female' ? 'female' : 'male'}`,
    android: `md-${gender === 'female' ? 'female' : 'male'}`,
  }),
}))`
  font-size: ${fonts.bigger};
  color: ${colors.primary};
  margin-right: ${metrics.baseMargin};
`;

export const Name = styled.Text`
  font-size: ${fonts.big};
  color: ${colors.darker};
`;

export const Description = styled.Text`
  color: ${colors.regular};
  font-size: ${fonts.medium};
`;

export const GoIcon = styled(Icon).attrs({
  name: Platform.select({
    ios: 'ios-arrow-forward',
    android: 'md-arrow-forward',
  }),
})`
  font-size: ${fonts.bigger};
  color: ${colors.primary};
  margin-right: ${metrics.baseMargin};
`;

export const PetsList = styled.FlatList`
  flex: 1;
  align-self: stretch;
`;

export const SelectPetText = styled.Text`
  font-size: ${fonts.bigger};
  font-weight: bold;
  margin: ${metrics.baseMargin * 2}px;
  align-self: flex-start;
  color: ${colors.white};
`;

export const CenterContainer = styled.View`
  align-self: stretch;
  flex: 1;
  justify-content: center;
`;

export const FormPetContainer = styled.View`
  align-self: stretch;
  flex-direction: row;
  align-items: center;
  margin-bottom: ${metrics.baseMargin * 2};
  padding-bottom: ${metrics.basePadding};
  border-bottom-width: 1;
  border-bottom-color: ${colors.light};
`;

export const FormPetAvatar = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 60;
  height: 60;
  margin-right: ${metrics.baseMargin};
`;

export const FormInfoContainer = styled.View`
  flex: 1;
`;

export const FormNameContainer = styled.View`
  flex-direction: row;
  margin-bottom: ${metrics.baseMargin / 2};
  align-items: center;
`;

export const FormGenderIcon = styled(Icon).attrs(({ gender }) => ({
  name: Platform.select({
    ios: `ios-${gender === 'female' ? 'female' : 'male'}`,
    android: `md-${gender === 'female' ? 'female' : 'male'}`,
  }),
}))`
  font-size: ${fonts.bigger};
  color: ${colors.primary};
  margin-right: ${metrics.baseMargin};
`;

export const FormName = styled.Text`
  font-size: ${fonts.big};
  color: ${colors.darker};
`;

export const FormDescription = styled.Text`
  color: ${colors.regular};
  font-size: ${fonts.medium};
`;
