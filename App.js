import React from 'react';
import { StyleSheet, ActivityIndicator, Text, View } from 'react-native';

//Components
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import DrinkList from './components/DrinkList/DrinkList';

const DRINKS_ENDPOINT = 'http://192.168.1.20:3000/api/v1/drinks';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      searchInputText: '',
      drinks: [],
      filteredDrinks: [],
      isLoading: false
    }

    this.handleOnChangeText = this.handleOnChangeText.bind(this);
    this.filterDrinks = this.filterDrinks.bind(this);
  }

  componentDidMount() {
    this.fetchDrinks();
  }

  fetchDrinks() {
    this.setState({ isLoading: true });
    return fetch(DRINKS_ENDPOINT)
     .then((response) => response.json())
     .then((responseJson) => {
       this.setState({
         isLoading: false,
         drinks: responseJson.drinks,
         filteredDrinks: responseJson.drinks,
       });
     })
     .catch((error) => {
       console.error(error);
     });
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
      return (drink.name.toLowerCase().indexOf(searchInputText.toLowerCase().trim()) !== -1);
    });

    return filteredDrinks;
  }

  render() {
    const { searchInputText, drinks, filteredDrinks, isLoading } = this.state;
    if (isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

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
