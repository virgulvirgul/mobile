import React from 'react';
import styled from 'styled-components';
import { Button, Text, View, TextInput } from 'react-native';
import { Fetch } from 'react-data-fetching';
import { Container, H1 } from '../components';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { CheckBox } from 'react-native-elements';

const SearchFormContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CheckboxContainer = styled.View`
  width: 100%;
  margin-top: 50px;
`;

const GooglePlacesInput = () => {
  return (
    <GooglePlacesAutocomplete
      placeholder="Search"
      minLength={2}
      autoFocus={false}
      returnKeyType={'search'}
      listViewDisplayed="auto"
      fetchDetails={true}
      renderDescription={row => row.description}
      onPress={(data, details = null) => {
        console.log(data, details);
      }}
      getDefaultValue={() => ''}
      query={{
        key: '',
        language: 'en',
        types: '(cities)',
      }}
      styles={{
        textInputContainer: {
          width: '100%',
        },
        description: {
          fontWeight: 'bold',
        },
        predefinedPlacesDescription: {
          color: '#1faadb',
        },
      }}
      currentLocation={false}
      nearbyPlacesAPI="GooglePlacesSearch"
      filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']}
      debounce={200}
    />
  );
};

export default class SearchForm extends React.Component {
  constructor() {
    super();
    this.state = {
      location: '',
      tags: [],
    };
  }

  selectTags = index => {
    const newState = Object.assign({}, this.state);
    let arr = newState.tags;
    arr[index] = !this.state.tags[index];
    this.setState({ tags: arr });
  };

  render() {
    return (
      <SearchFormContainer>
        <GooglePlacesInput />
        <CheckboxContainer>
          <Fetch path="/tags">
            {({ data }) => {
              return data.map((item, i) => (
                <CheckBox
                  title={item.names['en-us']}
                  key={i}
                  checked={this.state.tags[i]}
                  onPress={() => this.selectTags(i)}
                />
              ));
            }}
          </Fetch>
        </CheckboxContainer>
        <Button title="Search" color="#4fb797" onPress={() => alert('search')} />
      </SearchFormContainer>
    );
  }
}
