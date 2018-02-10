import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Components
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import DrinkList from './components/DrinkList/DrinkList';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Search />
        <DrinkList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
