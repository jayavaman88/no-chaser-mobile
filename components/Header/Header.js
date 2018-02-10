import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.title}>No Chaser</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#3D315B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 48,
  }
});
