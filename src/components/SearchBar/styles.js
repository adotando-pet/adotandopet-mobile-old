import { Platform } from 'react-native';
import styled from 'styled-components/native';

import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';

import { getStatusBarHeight } from 'react-native-status-bar-height';

import { colors, metrics, fonts } from '~/styles';

export const Container = styled.View`
  align-self: stretch;
  padding: ${Platform.OS === 'ios'
    ? metrics.basePadding
    : metrics.baseMargin - 5}px
    ${metrics.basePadding}px;
  background-color: ${colors.mediumWhiteTransparent};
  margin: ${getStatusBarHeight()}px ${metrics.baseMargin}px
    ${metrics.baseMargin}px ${metrics.baseMargin}px;
  border-radius: ${metrics.baseRadius};
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: colors.white,
})`
  flex: 1;
  color: ${colors.primary};
`;

export const SearchIcon = styled(FontAwesome5Icon)`
  font-size: ${fonts.big};
  color: ${colors.white};
`;

export const FiltersContainer = styled.TouchableOpacity`
  padding: 0 ${metrics.basePadding}px;
  align-self: center;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ExpandIcon = styled(IoniconsIcon).attrs({
  name: Platform.select({
    ios: 'ios-add-circle-outline',
    android: 'md-add-circle-outline',
  }),
})`
  font-size: ${fonts.medium};
  color: ${colors.white};
`;

export const FiltersText = styled.Text`
  color: ${colors.white};
  margin-left: ${metrics.baseMargin / 2};
`;

export const DetailedFilters = styled.View`
  align-self: stretch;
  background-color: ${colors.white};
  border-radius: ${metrics.baseRadius};
  margin: ${metrics.baseMargin}px;
  padding: ${metrics.basePadding}px;
`;
