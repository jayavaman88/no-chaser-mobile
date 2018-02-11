import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Components
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import DrinkList from './components/DrinkList/DrinkList';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      searchInputText: '',
      drinks: [
        {key: 'whiskey'},
        {key: 'hennessy'},
        {key: 'sake'},
        {key: 'soju'},
      ],
      filteredDrinks: [
        {key: 'whiskey'},
        {key: 'hennessy'},
        {key: 'sake'},
        {key: 'soju'},
      ],
    }

    this.handleOnChangeText = this.handleOnChangeText.bind(this);
    this.filterDrinks = this.filterDrinks.bind(this);
  }


  handleOnChangeText(searchInputText) {
    const { drinks } = this.state;
    const filteredDrinks = this.filterDrinks(searchInputText, drinks);

    this.setState({
      searchInputText,
      filteredDrinks,
    });
  }

  filterDrinks(searchInputText, drinks) {

    const filteredDrinks = drinks.filter(drink => {
      return (drink.key.toLowerCase().indexOf(searchInputText.toLowerCase().trim()) !== -1);
    });

    return filteredDrinks;
  }

  render() {
    const { searchInputText, drinks, filteredDrinks } = this.state;
    return (
      <View style={styles.container}>
        <Header />
        <Search searchInputText={searchInputText} handleOnChangeText={this.handleOnChangeText} />
        <DrinkList drinks={filteredDrinks}/>
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
