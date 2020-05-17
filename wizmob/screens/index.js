import React from 'react';
import { ImageBackground, StyleSheet, View, TouchableOpacity, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { ImagePicker, Permissions } from 'expo';

import Header from '../components/header';
import { globalStyles } from '../styles/globalStyles';

export default function Index() {

  state = {
      image: null,
  }

  selectImage = async () => {
      await Permissions.askAsync(Permissions.CAMERA_ROLL);
      const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({aspect: 1, allowsEditing: true});
      if(!cancelled)
        this.setState({ image: uri });
  }

  takePicture = async () => {
      await Permissions.askAsync(Permissions.CAMERA);
      const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({ allowsEditing: false });
      if(!cancelled)
        this.setState({ image: uri})
  }

  {/* 

    After taking/selecting the image
    user should be taken to the 
    result - screen, where the
    image should also be displayed.

    Confirming the selected image should
    then activate the AI - model,
    and display the results for the user
    
    /*/}

  return (
    <View style={globalStyles.container}>
      <Header />
      <ImageBackground source={require('../images/wizardify_logo_1.png')} style={ styles.image }>
        <View style={ styles.buttonContainer }>
            <TouchableOpacity>
            <MaterialIcons name="monochrome-photos" size={30} />
            <Button
            color="black"
            title="Camera"
            onPress={ this.takePicture }
            />
            </TouchableOpacity>
            <TouchableOpacity>
            <MaterialIcons name="photo" size={30}/>
            <Button
            color="black"
            title="Gallery"
            onPress={ this.selectImage }
            />
            </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 20
  },
  item: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'pink',
    fontSize: 20,
    marginHorizontal: 10,
    marginTop: 20,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    padding: 50
  },
});
