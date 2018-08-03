import React from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const NavbarContainer = styled.View`
  height: 80px;
  background-color: #e9e9ef;
  padding-top: 20px;
  align-items: center;
  justify-content: center;
`;

export default class Navbar extends React.PureComponent {
  render() {
    return (
      <NavbarContainer testID="Navbar">
        <Icon name="chevron-down" size={18} />
      </NavbarContainer>
    );
  }
}
