import styled from 'styled-components/native';

import { Animated } from 'react-native';

import { metrics, colors } from '~/styles';

export const Container = styled(Animated.View)`
  align-self: stretch;
  padding-top: 20;
  border-bottom-color: ${colors.white};
  margin-bottom: ${metrics.baseMargin}px;
`;

export const Label = styled(Animated.Text)`
  position: absolute;
`;

export const Input = styled.TextInput.attrs({})`
  height: 26px;
  font-size: 20;
  color: ${colors.primary};
  padding: 0;
  margin: 0;
`;
