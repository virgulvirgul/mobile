import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TouchableNativeFeedback, StyleSheet, Keyboard } from 'react-native';
import { CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import CitiesAutocomplete from './CitiesAutocomplete';
import { getLang } from '../../libs/utils';

const Field = React.Fragment;

const Container = styled.ScrollView.attrs({
  contentContainerStyle: () => ({
    justifyContent: 'space-between',
    flexGrow: 1,
  }),
})``;

const Form = styled.View``;

const Footer = styled.View``;

const FieldLabel = styled.Text`
  color: #444;
  font-weight: 700;
  margin-bottom: 10px;
  margin-top: 30px;
`;

const Button = styled.Text`
  background-color: #4fb797;
  color: white;
  border-radius: 100;
  padding-vertical: 10;
  text-align: center;
  font-weight: bold;
  font-size: 18;
  margin-horizontal: 10;
  margin-top: auto;
  top: auto;
  bottom: 15;
`;

const styles = StyleSheet.create({
  checkboxContainer: {
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  checkboxText: {
    fontWeight: '100',
  },
  citySelectorInput: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

const capitalizeFirstChar = string => string.charAt(0).toUpperCase() + string.slice(1);

export default class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: {},
      tags: props.tags.map(() => false),
    };
  }

  handleCitySelection = city => {
    this.setState({
      location: city,
    });
  };

  selectTag = index => {
    Keyboard.dismiss();
    this.setState(prevState => ({
      tags: prevState.tags.map((tag, i) => (i !== index ? tag : !tag)),
    }));
  };

  search = () =>
    this.props.handleSearch({
      tags: this.props.tags.filter((t, i) => this.state.tags[i]).map(t => t.names[getLang()]),
      lat: this.state.location.lat,
      lng: this.state.location.lng,
    });

  renderTags = () =>
    this.props.tags.map((item, i) => (
      <CheckBox
        title={capitalizeFirstChar(item.names[getLang()])}
        key={i}
        checked={this.state.tags[i]}
        onPress={() => this.selectTag(i)}
        containerStyle={styles.checkboxContainer}
        textStyle={styles.checkboxText}
      />
    ));

  render() {
    return (
      <Container keyboardShouldPersistTaps="handled">
        <Form>
          <Field>
            <FieldLabel>CITY</FieldLabel>
            <CitiesAutocomplete
              inputStyle={styles.citySelectorInput}
              onSelect={this.handleCitySelection}
            />
          </Field>
          <Field>
            <FieldLabel>POPULAR TAGS</FieldLabel>
            {this.renderTags()}
          </Field>
        </Form>
        <Footer>
          <TouchableNativeFeedback onPress={this.search}>
            <Button>
              <Icon name="magnify" size={25} />
              Search
            </Button>
          </TouchableNativeFeedback>
        </Footer>
      </Container>
    );
  }
}

SearchForm.propTypes = {
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      names: PropTypes.object.isRequired,
      type: PropTypes.string.isRequired,
    }),
  ).isRequired,
  handleSearch: PropTypes.func.isRequired,
};
