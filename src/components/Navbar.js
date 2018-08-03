import React from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { LayoutAnimation } from 'react-native';

const NavbarContainer = styled.View`
  height: 80px;
`;

const FilterContainer = styled.View`
  height: 200px;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 5px;
  background-color: #e9e9ef;
  background-color: #4fb797;
  position: relative;
  top: -120px;
  align-items: center;
  justify-content: flex-end;
`;

export default class Navbar extends React.PureComponent {
  state = { isFilterOpen: false };

  toggleFilter = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({ isFilterOpen: !this.state.isFilterOpen });
  };

  render() {
    const { isFilterOpen } = this.state;
    return (
      <NavbarContainer testID="Navbar">
        <FilterContainer style={isFilterOpen && { top: 0 }}>
          <Icon
            name={isFilterOpen ? 'chevron-up' : 'chevron-down'}
            size={18}
            onPress={this.toggleFilter}
          />
        </FilterContainer>
      </NavbarContainer>
    );
  }
}
