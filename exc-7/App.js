import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, Image, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback} from 'react-native';

export default function App() {

  const [items, setItems] = useState([]);
  const [keyword, setKeyword] = useState('');

  const getRecipes = () => {
    const url = 'http://www.recipepuppy.com/api/?i=' + keyword;
    fetch(url)
    .then((response) => response.json())
    .then((responseJson) => {
      setItems(responseJson.results);
    })
    Keyboard.dismiss();
  }

  return (
    <KeyboardAvoidingView style = { styles.container} behavior = 'padding' enabled>
      <FlatList style = {styles.list} data = {items} renderItem = {({item}) =>
        <View>
          <Text> {item.title} </Text>
          <Image style={{width:70, height:70}} source={{uri: item.thumbnail}} />
        </View>
      } />
      
      <TextInput style = {styles.text} placeholder = 'search' onChangeText = {(keyword) => setKeyword(keyword)} />
        <View style = {styles.button}>
          <Button onPress = {getRecipes} title = 'Find me a recipe'
          variant='dark' />
        </View>
    </KeyboardAvoidingView>   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: '#FA8072',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    marginBottom: 30
  },
  list: {
    marginTop: 20
  },
  text: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 50,
    borderRadius: 5,
    width: '80%',
    backgroundColor: '#FFFFF0'
  },
  button: {
    marginBottom: 10
  },
});