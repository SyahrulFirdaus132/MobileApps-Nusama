import React, { useState } from 'react'
import { Dimensions, ImageBackground, StyleSheet, Text, View, TextInput } from 'react-native'
import { ImageHeaderLogin, ImageLogin } from '../../assets'
import Icon from 'react-native-vector-icons/FontAwesome5';
import TextInputEmail from './TextInputEmail';
import TextInputPassword from './TextInputPassword';

const Akun = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={ImageHeaderLogin} style={styles.ImageHeaderLogin}></ImageBackground>

      <View style={styles.hello}>
          <Text style={styles.login}>LOGIN</Text>
          <TextInputEmail />
          <TextInputPassword />
      </View>
        
    </View>

  )
}

export default Akun
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



const styles = StyleSheet.create({

  
  ImageHeaderLogin : { 
    width: windowWidth,
    marginTop: 30,
    height: windowHeight * 0.40
  },

  hello:{
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: windowHeight*0.11,
  
  },
  login:{
    fontSize: 17,
    color: '#000000',
    marginTop: -70,
    marginHorizontal: 135,
    fontWeight: 'bold'
  },
  UserName:{
    fontSize: 15,
    color: '#ffffff',
    fontWeight: 'bold'
  },
  page: {
    backgroundColor: '#D8D9CF',
    flex: 1
  },
  
  inputpassword:{
    backgroundColor: '#ffffff',
    marginHorizontal: 20,
    borderRadius: 15,
    height : 40,
    shadowColor: "#000",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    
    elevation: 9,
  
  },
 
})