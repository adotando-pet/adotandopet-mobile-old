import styled from 'styled-components/native';

import Touchable from 'react-native-platform-touchable';

import { colors, metrics, fonts } from '~/styles';

export const ButtonContainer = styled(Touchable).attrs({
  background: Touchable.Ripple(colors.secundary),
})`
  align-self: stretch;
  background-color: ${colors.buttonPrimary};
  margin-bottom: ${metrics.baseMargin * 4}px;
  border-radius: ${metrics.baseRadius};
  padding: ${metrics.basePadding / 2}px 0;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-weight: bold;
  color: ${colors.white};
  font-size: ${fonts.big};
`;

export const ButtonLoading = styled.ActivityIndicator.attrs({
  size: 'small',
  color: colors.white,
})``;
