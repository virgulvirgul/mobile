import React from 'react';
import PropTypes from 'prop-types';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import config from '../../libs/config';
import { getLang } from '../../libs/utils';

const CitiesAutoComplete = ({ inputStyle, onSelect }) => (
  <GooglePlacesAutocomplete
    placeholder="Search"
    minLength={2}
    autoFocus={false}
    returnKeyType="search"
    listViewDisplayed="false"
    fetchDetails
    renderDescription={row => row.description}
    onPress={(data, details = null) => {
      onSelect({
        lat: details.geometry.location.lat,
        lng: details.geometry.location.lng,
      });
    }}
    getDefaultValue={() => ''}
    query={{
      key: config.GOOGLE_MAPS_API_KEY,
      language: getLang(),
      types: '(cities)',
    }}
    styles={{
      textInputContainer: {
        backgroundColor: 'white',
        borderTopWidth: 0,
      },
      description: {
        fontWeight: 'bold',
      },
      textInput: inputStyle,
      predefinedPlacesDescription: {
        color: '#1faadb',
      },
    }}
    nearbyPlacesAPI="GooglePlacesSearch"
    filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']}
    debounce={200}
  />
);

CitiesAutoComplete.propTypes = {
  onSelect: PropTypes.func.isRequired,
  inputStyle: PropTypes.object,
};

export default CitiesAutoComplete;
