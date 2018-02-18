import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default class DrinkList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <View style={styles.list}>
        {this.props.drinks.length > 0 ?
        <FlatList
          style={styles.drinkList}
          data={this.props.drinks}
          renderItem={({item}) => {
            return (
              <View style={styles.textWrapper}>
                <Text style={styles.text}>{item.name}</Text>
              </View>
            );

          }}
        /> :
        <Text>🙁 Sorry, drink not found. Have you had too many to drink?</Text>
        }
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
  drinkList: {
    width: '100%',
  },
  textWrapper: {
    borderStyle: 'solid',
    borderColor: '#FFFFFF',
    borderBottomWidth: 1,
  },
  text: {
    color: '#FFFFFF',
    padding: 50,
    fontSize: 24,
    width: '100%',
    textAlign: 'center',
  }
});
