import styled from 'styled-components/native';

import { Platform } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import { colors, metrics, fonts } from '~/styles';

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
  color: ${colors.white};
  margin-bottom: ${metrics.baseMargin};
`;

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.primary};
  padding: ${metrics.basePadding}px;
`;

export const Card = styled.View`
  padding: ${metrics.basePadding}px;
  background: ${colors.white};
  border-radius: ${metrics.baseRadius};
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
  height: ${metrics.screenHeight * 0.2}px;
`;

export const Address = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  padding-bottom: ${metrics.basePadding};
`;

export const CepDescription = styled.Text`
  font-size: ${fonts.medium};
  margin-right: ${metrics.baseMargin};
`;

export const AddressDescription = styled.Text`
  font-size: ${fonts.medium};
`;

export const NameContainer = styled.View``;

export const NameDescription = styled.Text`
  font-size: ${fonts.big};
`;

export const NameText = styled.Text`
  font-size: ${fonts.big};
`;

export const AnimalInformation = styled.View``;

export const Shared = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const SharedDescription = styled.Text``;

export const Castred = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const CastredDescription = styled.Text``;

export const Vascinated = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const VascinatedDescription = styled.Text``;

export const Special = styled.View`
  flex-direction: column;
  padding-bottom: ${metrics.basePadding};
`;

export const SpecialContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const SpecialDescription = styled.Text``;

export const SpecialText = styled.Text``;

export const Lives = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const LivesDescription = styled.Text``;

export const Sociable = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const SociableDescription = styled.Text``;
