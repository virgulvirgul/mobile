import React from 'react';
import styled from 'styled-components';
import { Button, Text, View, TextInput } from 'react-native';
import { Container, H1 } from '../components';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const SearchFormContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 100%;
  position: relative;
  background: white;
`;

const GooglePlacesInput = () => {
  return (
    <GooglePlacesAutocomplete
      placeholder='Search'
      minLength={2}
      autoFocus={false}
      returnKeyType={'search'}
      listViewDisplayed='auto'
      fetchDetails={true}
      renderDescription={row => row.description}
      onPress={(data, details = null) => {
        console.log(data, details);
      }}

      getDefaultValue={() => ''}

      query={{
        key: '',
        language: 'en',
        types: '(cities)'
      }}

      styles={{
        textInputContainer: {
          width: '100%'
        },
        description: {
          fontWeight: 'bold'
        },
        predefinedPlacesDescription: {
          color: '#1faadb'
        }
      }}

      currentLocation={false}
      nearbyPlacesAPI='GooglePlacesSearch'

      filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']}

      debounce={200}
    />
  );
}

export default class SearchForm extends React.PureComponent {

  tags = {

  };

  constructor() {
    super();
    this.state = {
      location: ""
    };
  };

  render() {
    return (
      <SearchFormContainer>
        <GooglePlacesInput />
      </SearchFormContainer>
    );
  }
}
