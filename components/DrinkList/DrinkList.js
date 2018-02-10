import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class DrinkList extends React.Component {
  render() {
    return (
      <View style={styles.list}>
        <Text style={styles.title}>No Chaser Title</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    flex: 4,
    backgroundColor: '#708B75',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#FFFFFF',
  }
});
