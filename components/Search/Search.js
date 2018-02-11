import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default class Search extends React.Component {

  render() {
    const { handleOnChangeText, searchInputText } = this.props;
    return (
      <View style={styles.search}>
        <TextInput placeholder="Find your drink and Cheers!" onChangeText={handleOnChangeText} />
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
