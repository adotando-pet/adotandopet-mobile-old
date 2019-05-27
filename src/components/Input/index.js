import React, { Component } from 'react';
import { Animated } from 'react-native';
import PropTypes from 'prop-types';

import { colors, metrics } from '~/styles';

import { StyledInput } from './styles';

const Input = ({ label, setRef, onChangeText, id, ...other}) => (
  <StyledInput
    ref={(input) => {
      setRef(input);
      this.input = input;
    }}
    autoCorrect={false}
    allowFontScaling={false}
    onChangeText={value => onChangeText(id, value)}
    {...other}
    onFocus={this.handleFocus}
    onBlur={this.handleBlur}
  />
)

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
