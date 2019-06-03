import React from 'react';
import PropTypes from 'prop-types';

import { StyledInput } from './styles';

const Input = ({
  setRef, onChangeText, id, ...other
}) => (
  <StyledInput
    ref={(input) => {
      setRef(input);
    }}
    autoCorrect={false}
    allowFontScaling={false}
    onChangeText={value => onChangeText(id, value)}
    {...other}
  />
);

Input.propTypes = {
  value: PropTypes.string,
  onChangeText: PropTypes.func,
  setRef: PropTypes.func,
  id: PropTypes.string,
};

Input.defaultProps = {
  setRef: () => {},
  id: '',
  value: '',
  onChangeText: () => {},
};

export default Input;
