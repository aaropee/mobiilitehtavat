import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default function App() {

const [numberOne, setNumberOne] = useState(0);
const [numberTwo, setNumberTwo] = useState(0);
const [result, setResult] = useState(0);
const [data, setData] = useState([]);

const add = () => {
  const sum = parseInt(numberOne) + parseInt(numberTwo);
  const item = numberOne + ' + ' + numberTwo + ' = ' + sum;
  setResult(sum);
  setData([...data, {key: item}]);
}

const substract = () => {
  const sum = parseInt(numberOne) - parseInt(numberTwo);
  const item = numberOne + ' - ' + numberTwo + ' = ' + sum;
  setResult(sum);
  setData([...data, {key: item}]);
}

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
        <TextInput
        keyboardType="numeric"
        style={styles.input}
        onChangeText={(numberOne => setNumberOne(numberOne))} />

        <TextInput
        keyboardType="numeric"
        style={styles.input}
        onChangeText={(numberTwo => setNumberTwo(numberTwo))} />

    <View style={styles.buttonContainer}>
      <Button onPress={add} title = '+' />
      <Button onPress={substract} title = '-' />
    </View>
      <View style = {styles.historyContainer}>
        <Text>History</Text>
        <FlatList
        data={data}
        renderItem={({item}) => <Text> {item.key} </Text>} />
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
  input: {
    borderColor: "#f7287b",
    borderWidth: 2,
    width: 100,
    margin: 5,
    padding: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    width: 110,
  },
  text: {
    fontSize: 18
  },
  historyContainer: {
    alignItems: 'center',
    marginTop: 5,
  }
});
