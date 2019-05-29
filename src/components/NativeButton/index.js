import React from 'react';
import PropTypes from 'prop-types';

import { ButtonContainer, ButtonText, ButtonLoading } from './styles';

const NativeButton = ({ value, onPress, loading }) => (
  <ButtonContainer onPress={!loading ? onPress : null}>
    { !loading ? <ButtonText>{value}</ButtonText> : <ButtonLoading />}
  </ButtonContainer>
);

NativeButton.propTypes = {
  value: PropTypes.string,
  onPress: PropTypes.func,
  loading: PropTypes.bool,
};

NativeButton.defaultProps = {
  value: 'Example',
  onPress: () => {},
  loading: false,
};

export default NativeButton;
