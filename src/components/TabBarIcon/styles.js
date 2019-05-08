import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/Ionicons';

import { colors, metrics, fonts } from '~/styles';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  padding: ${metrics.basePadding / 2}px;
  width: 36px;
  height: 36px;
  border-radius: 18px;
  background: ${props => (props.focused ? colors.mediumWhiteTransparent : colors.transparent)};
`;

export const FeaturedIcon = styled(Icon)`
  font-size: ${props => (props.focused ? fonts.big : fonts.big - 2)};
`;
