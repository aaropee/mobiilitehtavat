import React, { useState, useEffect }from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, KeyboardAvoidingView, Keyboard, Picker} from 'react-native';

export default function App() {

const [rateList, setRateList] = useState([]);
const [amount, setAmount] = useState('');
const [rate, setRate] = useState('');
const [index, setIndex] = useState('');
const [converted, setConverted] = useState('');


useEffect(() => {
  getRates();
}, [])


const getRates = () => {
  const url = 'http://data.fixer.io/api/latest?access_key=5f40e9967840b7f80c3e907aaad415c4&format=1';
  fetch(url)
  .then(response => response.json())
  .then(responseJson => {
    setRateList(responseJson.rates);
  })
}

const convert = () => {
  setConverted(parseInt((amount) / rate).toFixed(2));
  Keyboard.dismiss()
}

return (
  <KeyboardAvoidingView style = {styles.container} behavior = 'padding' enabled>
    <Image style = {{width: 200, height: 200}} source = {{uri:'https://static01.nyt.com/images/2020/03/20/opinion/20Tooze/20Tooze-superJumbo.jpg'}}/>
    <Text style={{marginTop: 30, fontSize: 20}}>{converted} €</Text>
        <View style={styles.picker}>
          <TextInput
            placeholder = 'Amount'
            keyboardType = 'numeric'
            style={styles.input}
            onChangeText={(amount) => setAmount(amount)}
          />
          <Picker
            style={{width: 100, height: 50}}
            selectedValue={rate}
            onValueChange={
              (itemValue, itemIndex) => {
                setRate(itemValue);
                setIndex(itemIndex);
              }
            }>
            {Object.keys(rateList).map((k) => {
              return <Picker.Item label={k} value={rateList[k]} key={index} />
              })
            }
          </Picker>
          <Button onPress={convert} title = 'convert' />
        </View>
    </KeyboardAvoidingView>
  );
}

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     alignItems: 'center',
     justifyContent: 'center',
     backgroundColor: '#FAEBD7'
   },
   picker: {
     flexDirection: 'row'
   },
   input: {
     paddingVertical: 10,
     paddingHorizontal: 5,
     marginVertical: 10,
     borderRadius: 5,
     width: 100,
     backgroundColor: '#ffffff70'
   },
 }); 