import styled from 'styled-components/native';

import { colors, metrics } from '~/styles';

export const ButtonContainer = styled.TouchableOpacity`
  align-self: stretch;
  background-color: ${colors.buttonPrimary};
  margin: 0 ${metrics.baseMargin * 4}px;
  border-radius: ${metrics.baseRadius};
  padding: ${metrics.basePadding / 2}px 0;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-weight: bold;
  color: ${colors.white};
`;
