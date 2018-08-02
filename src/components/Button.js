import React from 'react';
import styled from 'styled-components';

const View = styled.View`
  background-color: transparent;
`;

const Text = styled.Text`
  font-size: 18px;
`;

const TouchableHighlight = styled.TouchableHighlight`
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const buttonColors = {
  primary: TouchableHighlight.extend`
    background-color: green;
  `,
  dark: TouchableHighlight.extend`
    background-color: black;
  `,
  light: TouchableHighlight.extend`
    background-color: white;
  `,
};

export default class Button extends React.PureComponent {
  render() {
    const { children, color, text = '', textStyle, ...rest } = this.props;
    const content = children || <Text style={textStyle}>{text}</Text>;
    const SelectedButton = buttonColors[color] || TouchableHighlight;

    // may need a switch case here because of different underlayColors
    return (
      <SelectedButton {...rest}>
        <View>{content}</View>
      </SelectedButton>
    );
  }
}
