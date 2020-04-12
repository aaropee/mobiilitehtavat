import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert, AsyncStorage } from 'react-native';

export default function App() {

  const [answer, setAnswer] = useState(0);
  const [userNumber, setUserNumber] = useState(0);
  const [guesses, setGuesses] = useState(0);
  const [hint, setHint] = useState('');
  const [highScore, setHighScore] = useState(99);   // Initial value, if not set the app will crash upon launch?

  useEffect(() => {
    start();
    saveHighScore();
  },[])

  const saveHighScore = async () => {
    try {
      await AsyncStorage.setItem('highScore', JSON.stringify(highScore));
    } catch (e) {
      Alert.alert('Error saving data')
    }
    try {
      let getHighScore = await AsyncStorage.getItem('highScore');
      setHighScore(JSON.parse(getHighScore))
    } catch (e) {
      Alert.alert('Error retrieving data')
    }
  }


  const start = () => {
    setAnswer(Math.floor(Math.random() * 100) +1)
    setHint('Guess a number between 1 - 100')
    setGuesses(1)
  }

  const check = () => {
    setGuesses(guesses + 1)
    if (userNumber < answer) {
      setHint('Your guess is too low')
    } else if (userNumber > answer) {
      setHint('Your guess is too high')
    } else {
      Alert.alert('You guessed the number in ' + (guesses) + ' guesses')
      newHighScore()
      start()
    }
  }

  const newHighScore = async () => {      
    try {
      let newValue = await AsyncStorage.getItem('highScore');
      let prevValue = JSON.parse(newValue);
      // Highscore == least amount of guesses gets saved
      if (guesses < prevValue) { 
        await AsyncStorage.setItem('highScore', JSON.stringify(guesses));
      }
    } catch (e) {
      Alert.alert('Data not saved')
    }
      try {
        let newValue = await AsyncStorage.getItem('highScore');
        setHighScore(JSON.parse(newValue))
      } catch (e) {
        Alert.alert('Error retrieving data')
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
        <Text> High Score: { highScore }</Text>
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
