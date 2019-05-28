import styled from 'styled-components/native';

import { colors, metrics, fonts } from '~/styles';

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
  
`;

export const CepDescription = styled.Text`
  font-size: ${fonts.medium};
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

export const Shared = styled.View``;

export const SharedDescription = styled.Text``;

export const Castred = styled.View``;

export const CastredDescription = styled.Text``;

export const Vascinated = styled.View``;

export const VascinatedDescription = styled.Text``;

export const Special = styled.View``;

export const SpecialContent = styled.View``;

export const SpecialDescription = styled.Text``;

export const SpecialText = styled.Text``;

export const Lives = styled.View``;

export const LivesDescription = styled.Text``;

export const Sociable = styled.View``;

export const SociableDescription = styled.Text``;
