import React from 'react';
import styled from 'styled-components';
import { Fetch } from 'react-data-fetching';
import { NavigationActions } from 'react-navigation';
import { H1, SearchForm } from '../components';

const SearchFormContainer = styled.View`
  flex-direction: column;
  background-color: white;
  padding-horizontal: 20px;
  flex: 1;
`;

export default class SearchFormScene extends React.Component {
  search = ({ tags, lat, lng }) =>
    this.props.navigation.dispatch(
      NavigationActions.navigate({
        routeName: 'SearchResults',
        params: {
          tags,
          lat,
          lng,
        },
      }),
    );

  render() {
    return (
      <SearchFormContainer>
        <H1>Search</H1>
        <Fetch path="/tags">
          {({ data }) => <SearchForm tags={data} handleSearch={this.search} />}
        </Fetch>
      </SearchFormContainer>
    );
  }
}
