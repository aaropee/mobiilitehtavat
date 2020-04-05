import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';

export default function App() {

  const [answer, setAnswer] = useState(0);
  const [userNumber, setUserNumber] = useState(0);
  const [guesses, setGuesses] = useState(0);
  const [hint, setHint] = useState('');

  useEffect(() => {
    start();
  },[])

  const start = () => {
    setAnswer(Math.floor(Math.random() * 100) +1)
    setHint('Guess a number between 1 - 100')
    setGuesses(0)
  }

  const check = () => {
    setGuesses(guesses + 1)
    if (userNumber < answer) {
      setHint('Your guess is too low')
    } else if (userNumber > answer) {
      setHint('Your guess is too high')
    } else {
      Alert.alert('You guessed the number in ' + (guesses + 1) + ' guesses')
      start()
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{hint}</Text>
      <TextInput
      style = {styles.inputContainer} 
      keyboardType = 'numeric'
      onChangeText = {(userNumber) => setUserNumber(userNumber) }
      />
      <View style = {styles.buttonContainer}>
        <Button onPress={check} title = "Guess a number" />
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
  },
  inputContainer: {
    marginTop: 20,
    marginBottom: 20,
    borderColor: 'black',
    borderWidth: 2,
    width: 50,
    padding: 5
  },
  buttonContainer: {
    flexDirection: 'row'
  },
  text: {
    fontSize: 18
  }
});
