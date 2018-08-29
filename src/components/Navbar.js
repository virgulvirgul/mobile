import React from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { LayoutAnimation, UIManager, Platform, Text } from 'react-native';

const NavbarContainer = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 45px;
`;

const FilterContainer = styled.View`
  height: 700px;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 5px;
  background-color: white;
  position: relative;
  top: -435px;
  align-items: center;
  justify-content: flex-end;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  margin-bottom: 10px;
  margin-top: -200px;

  ${({ active }) =>
    active &&
    `
    box-shadow: 2px 3px #888888;
    elevation: 5;
    shadowColor: #000000;
    shadowOpacity: 0.3;
    shadowRadius: 2;
    top: 0;
  `};
`;

export default class Navbar extends React.PureComponent {
  state = { isFilterOpen: false };

  toggleFilter = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    this.setState({ isFilterOpen: !this.state.isFilterOpen });
  };

  constructor() {
    super();

    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  render() {
    const { isFilterOpen } = this.state;
    return (
      <NavbarContainer testID="Navbar" style={isFilterOpen && { height: 'auto' }}>
        <FilterContainer active={isFilterOpen}>
          <Icon
            name={isFilterOpen ? 'chevron-up' : 'chevron-down'}
            size={18}
            onPress={this.toggleFilter}
          />
          {/*<Text>Slide Down for Search Form</Text>*/}
        </FilterContainer>
      </NavbarContainer>
    );
  }
}
