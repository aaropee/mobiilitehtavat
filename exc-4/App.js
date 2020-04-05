import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList, TextInput } from 'react-native';

export default function App() {

  const [item, setItem] = useState(0);
  const [data, setData] = useState([]);

  const addItem = () => {
    setData([...data, {key: item}]);
  }

  const clearList = () => {
    setData([]);
  }

  return (
    <View style={styles.container}>
      <View style = {styles.inputContainer}>
        <TextInput
        placeholder = 'Product'
        keyboardType='ascii-capable'
        onChangeText={(item) => setItem(item)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={addItem} title="Add item" />
        <Button onPress={clearList} title="Remove items" />
      </View>
      <View style = {styles.history}>
        <Text style = {styles.text}>Shopping List:</Text>
        <FlatList
        style = {styles.history}
        data = {data}
        renderItem={({item}) => <Text> {item.key} </Text>}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 200
  },
  text: {
    fontSize: 18,
    alignItems: 'center'
  },
  inputContainer: {
    borderColor: 'black',
    borderWidth: 2,
    padding: 5,
    width: 180,
    marginBottom: 10

  },
  buttonContainer: {
    padding: 5,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  history: {
    paddingTop: 5,
    paddingBottom: 5,
    alignSelf: 'center'
  }

});
