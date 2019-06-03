import styled from 'styled-components/native';

import { Platform } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import RNPickerSelect from 'react-native-picker-select';

import Icon from 'react-native-vector-icons/Ionicons';

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

export const BackIconContainer = styled.TouchableOpacity`
  position: absolute;
  top: 0;
  left: 0;
  padding: ${metrics.basePadding / 4}px ${metrics.basePadding / 2}px;
`;

export const BackIcon = styled(Icon).attrs({
  name: Platform.select({
    android: 'md-arrow-round-back',
    ios: 'ios-arrow-round-back',
  }),
})`
  color: ${colors.white};
  font-size: ${fonts.big * 2};
`;

export const Title = styled.Text`
  margin-top: ${metrics.baseMargin * 2};
  font-size: ${fonts.big * 2};
  font-weight: bold;
  text-align: center;
  color: ${colors.white};
  margin-bottom: ${metrics.baseMargin};
`;

export const FormContainer = styled.View`
  align-self: stretch;
  padding: ${metrics.basePadding}px;
  background-color: ${colors.white};
  border-radius: ${metrics.baseRadius};
  margin-bottom: ${metrics.baseMargin * 2};
`;

export const Avatar = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: ${metrics.screenWidth * 0.2};
  height: ${metrics.screenWidth * 0.2};
  margin-bottom: ${metrics.baseMargin};
  align-self: center;
`;

export const FormLabel = styled.Text`
  font-size: ${fonts.small};
  color: ${colors.black};
  margin-bottom: ${metrics.baseMargin / 2};
`;

export const SizeSelect = styled(RNPickerSelect).attrs({
  placeholder: {
    label: 'Selecione o Tamanho do Pet',
    value: null,
    color: colors.light,
  },
  items: [
    {
      label: 'Pequeno',
      value: 'small',
    },
    {
      label: 'Médio',
      value: 'medium',
    },
    {
      label: 'Grande',
      value: 'large',
    },
  ],
})``;

export const SexSelect = styled(RNPickerSelect).attrs({
  placeholder: {
    label: 'Selecione o Sexo do Pet',
    value: null,
    color: colors.light,
  },
  items: [
    {
      label: 'Macho',
      value: 'male',
    },
    {
      label: 'Fêmea',
      value: 'female',
    },
  ],
})``;

export const Error = styled.Text`
  font-size: ${fonts.small};
  color: ${colors.danger};
  text-align: center;
  margin-bottom: ${metrics.baseMargin * 2};
  font-weight: bold;
`;

export const FormCastratedContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const FormCastratedText = styled.Text`
  flex: 1;
  font-size: ${fonts.small};
`;

export const FormCastratedSwitch = styled.Switch.attrs({
  trackColor: {
    true: colors.secundary,
  },
})`
  margin-left: ${metrics.baseMargin};
`;
