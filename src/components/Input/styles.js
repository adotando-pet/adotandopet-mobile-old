import styled from 'styled-components/native';

import { colors, metrics, fonts } from '~/styles';

export const StyledInput = styled.TextInput.attrs({
  placeholderTextColor: colors.light,
})`
  font-size: ${fonts.medium};
  padding: ${metrics.basePadding / 2}px 0;
  margin-bottom: ${metrics.baseMargin};
  color: ${colors.secundary};
`;
