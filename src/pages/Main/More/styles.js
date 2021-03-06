import styled from 'styled-components/native';

import { Platform, StyleSheet } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Touchable from 'react-native-platform-touchable';

import { colors, metrics, fonts } from '~/styles';

export const Container = styled(LinearGradient).attrs({
  colors: [colors.secundary, colors.primary],
})`
  flex: 1;
`;

export const ContentContainer = styled.KeyboardAvoidingView.attrs({
  behavior: Platform.OS === 'ios' ? 'padding' : null,
})`
  margin-top: ${metrics.headerMargin}px;
  flex: 1;
  align-items: center;
  padding: ${metrics.basePadding}px;
`;

export const Title = styled.Text`
  margin-top: ${metrics.baseMargin * 2};
  font-size: ${fonts.big * 2};
  font-weight: bold;
  text-align: center;
  color: ${colors.white};
  margin-bottom: ${metrics.baseMargin * 2};
`;

export const ListContainer = styled.ScrollView`
  flex: 1;
  align-self: stretch;
`;

export const ListItem = styled(Touchable)`
  align-self: stretch;
  margin-top: ${metrics.baseMargin}px;
  padding: ${metrics.basePadding / 2}px 0;
  border-bottom-width: ${StyleSheet.hairlineWidth};
  border-bottom-color: ${colors.white};
`;

export const ListItemText = styled.Text`
  font-size: ${fonts.medium};
  color: ${colors.white};
  text-transform: uppercase;
`;
