import React from 'react';
import styled from 'styled-components';
import { Fetch } from 'react-data-fetching';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import searchActions from '../actions';
import { H1, SearchForm } from '../../../components';

const SearchFormWrapper = styled.View`
  flex-direction: column;
  background-color: white;
  padding-horizontal: 20px;
  flex: 1;
`;

class SearchFormContainer extends React.Component {
  render() {
    return (
      <SearchFormWrapper>
        <H1>Search</H1>
        <Fetch path="/tags">
          {({ data }) => <SearchForm tags={data} handleSearch={this.props.search} />}
        </Fetch>
      </SearchFormWrapper>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => bindActionCreators({ search: searchActions.search }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchFormContainer);
