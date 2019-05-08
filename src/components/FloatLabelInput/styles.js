import styled from 'styled-components/native';

import { Animated } from 'react-native';

import { metrics, colors } from '~/styles';

export const Container = styled(Animated.View)`
  align-self: stretch;
  margin: ${metrics.baseMargin}px ${metrics.baseMargin * 4}px;
  padding-top: 20;
  border-bottom-color: ${colors.white};
`;

export const Label = styled(Animated.Text)`
  position: absolute;
`;

export const Input = styled.TextInput`
  height: 26px;
  font-size: 20;
  color: ${colors.primary};
`;
