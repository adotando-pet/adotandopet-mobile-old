import { Platform } from 'react-native';

import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/Ionicons';

import { colors, metrics, fonts } from '~/styles';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.primary};
`;

export const CardButton = styled.TouchableOpacity``;

export const CardContainer = styled.View`
  padding: ${metrics.basePadding}px;
  background: ${colors.white};
  border-radius: ${metrics.baseRadius};
  margin-bottom: ${metrics.baseMargin}px;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${metrics.baseMargin}px;
`;

export const Image = styled.Image.attrs({
  resize: 'cover',
})`
  width: ${metrics.screenWidth * 0.2}px;
  height: ${metrics.screenWidth * 0.2}px;
`;

export const InfoContainer = styled.View``;

export const NameContainer = styled.View`
  flex-direction: row;
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

export const NameText = styled.Text`
  font-size: ${fonts.big};
  font-weight: bold;
  margin-bottom: ${metrics.baseMargin / 2};
`;

export const NameDescription = styled.Text`
  font-size: ${fonts.medium};
`;

export const TagsContainer = styled.View`
  align-self: stretch;
  flex-direction: row;
`;

export const TagContainer = styled.View`
  background: ${colors.buttonPrimary};
  border-radius: ${metrics.baseRadius};
  padding: ${metrics.basePadding / 4}px ${metrics.basePadding / 2}px;
  margin-bottom: ${metrics.baseMargin}px;
  margin-right: ${metrics.baseMargin}px;
`;

export const TagDescription = styled.Text`
  font-size: ${fonts.medium};
  color: ${colors.white};
`;

export const Description = styled.Text`
  font-size: ${fonts.small};
`;

export const Empty = styled.Text`
  color: ${colors.white};
  font-weight: 600;
  text-align: center;
  margin-top: ${metrics.baseMargin * 2}px;
`;

export const CardsList = styled.FlatList`
  flex: 1;
  align-self: stretch;
  padding: ${metrics.basePadding}px;
`;

export const LoadingIndicator = styled.ActivityIndicator.attrs({
  size: 'large',
  color: colors.white,
})`
  align-self: center;
  margin-top: ${metrics.baseMargin * 2};
`;
