import styled from 'styled-components/native';

import { Platform } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import Icon from 'react-native-vector-icons/Ionicons';

import Touchable from 'react-native-platform-touchable';

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

export const PetContainer = styled.View`
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

export const ButtonsContainer = styled.View`
  align-items: flex-end;
`;

export const MoreButton = styled(Touchable)`
  padding: 0 ${metrics.basePadding / 2}px;
  margin-bottom: ${metrics.baseMargin};
`;

export const MoreIcon = styled(Icon).attrs({
  name: Platform.select({
    ios: 'ios-more',
    android: 'md-more',
  }),
})`
  font-size: ${fonts.bigger};
  color: ${colors.regular};
`;

export const AnnounceButton = styled(Touchable)`
  padding: ${metrics.basePadding / 2}px ${metrics.basePadding}px;
  background-color: ${colors.buttonPrimary};
  border-radius: ${metrics.baseRadius};
`;

export const AnnounceText = styled.Text`
  font-size: ${fonts.medium};
  color: ${colors.white};
`;

export const PetsList = styled.FlatList`
  flex: 1;
  align-self: stretch;
  padding: ${metrics.basePadding}px;
`;

export const EmptyText = styled.Text`
  color: ${colors.white};
  font-size: ${fonts.medium};
  text-align: center;
  margin-top: ${metrics.baseMargin * 2};
  align-self: stretch;
`;
