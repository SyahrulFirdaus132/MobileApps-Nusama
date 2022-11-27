import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';


const TextInputPassword = () => {
    const [password, setPassword] = useState('')
  return (
    <View style={styles.input}>
    <View style={styles.iconinput}>
    <Icon name="lock"   size={30} color="#900" />
    </View>
    
    <TextInput value={password} style={styles.inputpassword} placeholder=" Masukan Password" onChangeText={text=> setPassword(text)}/>
    </View>
  )
}

export default TextInputPassword

const styles = StyleSheet.create({
    inputpassword: {
        backgroundColor: '#ffffff',
        // marginHorizontal: 20,
        // borderRadius: 15,
        borderBottomRightRadius: 15,
        borderTopRightRadius: 15,
        // paddingVertical: 20,
        height: 40,
        shadowColor: "#000",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        
        elevation: 9,
        flex: 1,
        
        
      },
      iconinput : {
        justifyContent :'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        width: 50,
        borderTopLeftRadius:15,
        borderBottomLeftRadius: 15,
      },
      input: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginTop: 10
      }
})