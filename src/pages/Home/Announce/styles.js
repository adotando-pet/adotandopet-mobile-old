import styled from 'styled-components/native';

import { colors, metrics, fonts } from '~/styles';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.primary};
`;

export const ContentContainer = styled.View`
  padding: ${metrics.basePadding}px;
`;

export const CardContainer = styled.View`
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
  height: ${metrics.screenWidth * 0.2}px;
`;

export const NameContainer = styled.View`
`;

export const NameText = styled.Text`
  font-size: ${fonts.big};
`;

export const NameDescription = styled.Text`
  font-size: ${fonts.medium};
`;

export const TagContainer = styled.View`
  background: ${colors.buttonPrimary};
  border-radius: ${metrics.baseRadius};
  align-self: flex-start;
  padding: ${metrics.basePadding / 2}px ${metrics.basePadding}px;
  margin-bottom: ${metrics.baseMargin * 2}px;
`;

export const TagDescription = styled.Text`
  font-size: ${fonts.medium};
  color: ${colors.white};
`;

export const Description = styled.Text`
  font-size: ${fonts.small};
`;
