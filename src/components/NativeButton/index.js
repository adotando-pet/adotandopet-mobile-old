import React from 'react';
import PropTypes from 'prop-types';

import { ButtonContainer, ButtonText } from './styles';

const NativeButton = ({ value, onPress }) => (
  <ButtonContainer onPress={onPress}>
    <ButtonText>{value}</ButtonText>
  </ButtonContainer>
);

NativeButton.propTypes = {
  value: PropTypes.string,
  onPress: PropTypes.func,
};

NativeButton.defaultProps = {
  value: 'Example',
  onPress: () => {},
};

export default NativeButton;
