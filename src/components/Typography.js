import React from 'react';
import styled from 'styled-components';

const TextH1 = styled.Text`
  font-size: 32px;
`;

const TextH2 = styled.Text`
  font-size: 22px;
`;

const TextH3 = styled.Text`
  font-size: 15px;
`;

const TextP = styled.Text`
  font-size: 12px;
  color: #aaa;
`;

export class H1 extends React.PureComponent {
  render() {
    const { center, style, ...rest } = this.props;
    const alignment = { textAlign: center ? 'center' : 'left' };
    const styles = [alignment, style];
    return <TextH1 style={styles} {...rest} />;
  }
}
export class H2 extends React.PureComponent {
  render() {
    const { center, style, ...rest } = this.props;
    const alignment = { textAlign: center ? 'center' : 'left' };
    const styles = [alignment, style];
    return <TextH2 style={styles} {...rest} />;
  }
}

export class H3 extends React.PureComponent {
  render() {
    const { center, style, ...rest } = this.props;
    const alignment = { textAlign: center ? 'center' : 'left' };
    const styles = [alignment, style];
    return <TextH3 style={styles} {...rest} />;
  }
}

export class P extends React.PureComponent {
  render() {
    const { center, style, ...rest } = this.props;
    const alignment = { textAlign: center ? 'center' : 'left' };
    const styles = [alignment, style];
    return <TextP style={styles} {...rest} />;
  }
}
