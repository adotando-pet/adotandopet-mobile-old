import React, { Component } from 'react';
import { Animated } from 'react-native';
import PropTypes from 'prop-types';

import { colors, metrics } from '~/styles';

import { Container, Label, Input } from './styles';

export default class FloatLabelInput extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChangeText: PropTypes.func.isRequired,
    setRef: PropTypes.func,
    id: PropTypes.string,
  };

  static defaultProps = {
    setRef: () => {},
    id: '',
  };

  state = {
    isFocused: false,
  };

  constructor(props) {
    super(props);

    const { value } = this.props;

    this.animatedIsFocused = new Animated.Value(value === '' ? 0 : 1);
  }

  componentDidUpdate() {
    const { isFocused } = this.state;
    const { value } = this.props;

    Animated.timing(this.animatedIsFocused, {
      toValue: isFocused || value ? 1 : 0,
      duration: 200,
    }).start();
  }

  handleFocus = () => this.setState({ isFocused: true });

  handleBlur = () => this.setState({ isFocused: false });

  render() {
    const {
      label, setRef, onChangeText, id, ...other
    } = this.props;
    const { isFocused } = this.state;

    const labelStyle = {
      top: this.animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [20, 10],
      }),
      left: this.animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 10],
      }),
      fontSize: this.animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [20, 14],
      }),
      color: this.animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [colors.lowWhiteTransparent, colors.primary],
      }),
    };

    const containerStyle = {
      backgroundColor: this.animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [colors.transparent, colors.white],
      }),
      borderRadius: this.animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [0, metrics.baseRadius],
      }),
      paddingTop: this.animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [18, 18 + metrics.basePadding / 2],
      }),
      paddingBottom: this.animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [0, metrics.basePadding / 2],
      }),
      paddingLeft: this.animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [0, metrics.basePadding / 2],
      }),
      paddingRight: this.animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [0, metrics.basePadding / 2],
      }),
      borderBottomWidth: this.animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0],
      }),
    };

    return (
      <Container style={containerStyle}>
        <Label style={labelStyle} isFocused={isFocused}>
          {label}
        </Label>
        <Input
          ref={(input) => {
            setRef(input);
            this.input = input;
          }}
          autoCapitalize="none"
          autoCorrect={false}
          allowFontScaling={false}
          onChangeText={value => onChangeText(id, value)}
          {...other}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
      </Container>
    );
  }
}
