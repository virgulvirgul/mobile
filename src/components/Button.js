import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableHighlight } from 'react-native';
import styled from 'styled-components';

const View = styled.View`
  background-color: transparent;
`;

const Text = styled.Text`
  font-size: 18px;
`;

const buttonStyles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 100,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  primary: {
    backgroundColor: '#4fb797',
    color: 'white',
  },
  dark: {
    backgroundColor: 'black',
    color: 'white',
  },
  light: {
    backgroundColor: 'white',
    color: 'black',
  },
  big: {
    padding: 10,
  },
  small: {
    padding: 5,
  },
});

export default class Button extends React.PureComponent {
  render() {
    const { children, color, textStyle, size, ...rest } = this.props;

    const content = children;
    const sizeStyle = buttonStyles[size];
    const colorStyle = buttonStyles[color];

    // may need a switch case here because of different underlayColors
    return (
      <TouchableHighlight
        {...rest}
      >
        <Text style={[buttonStyles.main, sizeStyle, colorStyle]}>
          {content}
        </Text>
      </TouchableHighlight>
    );
  }
}

Button.propTypes = {
  color: PropTypes.oneOf(['primary', 'dark', 'light']),
  size: PropTypes.oneOf(['big', 'small']),
};

Button.defaultProps = {
  color: 'primary',
  size: 'big',
};
