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
`;

export const Title = styled.Text`
  font-size: ${fonts.big * 2};
  font-weight: bold;
  text-align: center;
  color: ${colors.white};
  margin-bottom: ${metrics.baseMargin * 3};
`;

export const LoginText = styled.Text`
  color: ${colors.white};
  font-size: ${fonts.small};
  text-align: center;
  margin-top: ${metrics.baseMargin * 2};
  align-self: stretch;
`;

export const AdoptionContainer = styled.View`
  align-self: stretch;
  flex-direction: row;
  align-items: center;
  margin-bottom: ${metrics.baseMargin};
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
  color: ${colors.white};
  margin-right: ${metrics.baseMargin};
`;

export const Name = styled.Text`
  font-size: ${fonts.big};
  color: ${colors.white};
`;

export const Description = styled.Text`
  color: ${colors.white};
  font-size: ${fonts.medium};
`;

export const CommentsButton = styled(Touchable)`
  align-self: stretch;
  justify-content: center;
  padding: 0 ${metrics.basePadding / 2}px;
`;

export const CommentsIcon = styled(Icon).attrs({
  name: Platform.select({
    ios: 'ios-chatbubbles',
    android: 'md-chatbubbles',
  }),
})`
  font-size: ${fonts.bigger};
  color: ${colors.white};
`;

export const MoreButton = styled(Touchable)`
  align-self: stretch;
  justify-content: center;
  padding: 0 ${metrics.basePadding / 2}px;
`;

export const MoreIcon = styled(Icon).attrs({
  name: Platform.select({
    ios: 'ios-more',
    android: 'md-more',
  }),
})`
  font-size: ${fonts.bigger};
  color: ${colors.white};
`;

export const AdoptionsList = styled.FlatList`
  flex: 1;
  align-self: stretch;
  padding: ${metrics.basePadding}px;
`;
