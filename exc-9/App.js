
import React, { useState } from 'react';
import { StyleSheet, Button, View, KeyboardAvoidingView, TextInput, ScrollView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geocoder from 'react-native-geocoding';

Geocoder.init('AIzaSyBUcUOiqIlrNqDkBLSWYUwdSGAGB7FIWa8'); // Google API - key

export default function App() {

  const [lat, setLat] = useState(60.201373);
  const [lng, setLng] = useState(24.934041);
  const [address, setAddress] = useState('');

  const findLocation = () => {
    Geocoder.from(address)
            .then(json => {
              let location = json.results[0].geometry.location;
              setLat(location.lat);
              setLng(location.lng);
            })
            .catch(error => console.warn(error));
        }
            

  return (
    <View style={styles.container}>
      <MapView
      style={styles.map}
      region={{
        latitude: lat,
        longitude: lng,
        latitudeDelta: 0.0322,
        longitudeDelta: 0.0221
      }}
      >
        <Marker 
          coordinate={{
            latitude: lat,
            longitude: lng
          }}
        />
      </MapView>
      <KeyboardAvoidingView
        style={styles.typeView}
        behavior='padding' enabled
        keyboardVerticalOffset={-300} // Minimizes the padding when keyboard opens up
        >
        <View style={styles.typeView}>
        <TextInput style={styles.input}
          placeholder = "Enter location"
          onChangeText={(address) => setAddress(address)} />
        <Button style={styles.buttons} onPress={findLocation} title="Search" />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b8f2e6'
  },
  map: {
    flex: 8
  },
  typeView: {
    flex: 2,
    paddingHorizontal: 15,
    paddingVertical: 0
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 15,
    borderRadius: 5,
    width: '80%',
    backgroundColor: 'white',
  },
  buttons: {
    flex: 2,
    alignItems: 'center'
  },
});