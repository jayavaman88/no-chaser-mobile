import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default class Search extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      searchInputText: '',
    }

    this.handleOnChangeText = this.handleOnChangeText.bind(this);
  }


  handleOnChangeText(searchInputText) {
    this.setState({
      searchInputText,
    });
  }

  render() {
    return (
      <View style={styles.search}>
        <TextInput placeholder="Find your drink and Cheers!" onChangeText={this.handleOnChangeText} />
        <Text>{this.state.searchInputText}</Text> 
      </View>
    )
  }
}

const styles = StyleSheet.create({
  search: {
    flex: 1,
    backgroundColor: '#444B6E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#FFFFFF',
  }
});
