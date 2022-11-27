import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AddSaldo, IconGetPoint, Gallery, Shop, Materials, Offer } from '../../assets'
import { WARNA_UTAMA } from '../../utils/constant'

const ButtonIcon  = ({title, type}) => {

    const Icon =() => {
        if(title === "Add Saldo") return <AddSaldo />

        if(title === "Get Point") return <IconGetPoint />

        if(title === "Gallery") return <Gallery />

        if(title === "Materials") return <Materials />
        
        if(title === "Shop") return <Shop />
       
        if(title === "Offer") return <Offer />


        return <AddSaldo />
    }
  return (
   <TouchableOpacity style={styles.container} >
    <View style={styles.buttoon}>
    <View style={styles.button(type)}>
        <Icon />
    </View>
    </View>
    <Text style={styles.text(type)}>{title}</Text>
   </TouchableOpacity>
  )
}

export default ButtonIcon 

const styles = StyleSheet.create({

    container: (type) => ({
        marginBottom: type === "layanan" ? 12 : 0,
        marginRight: type === "layanan" ? 30 : 0
     
        
    }),

    button: (type) => ({
        backgroundColor: WARNA_UTAMA,
        padding: type === "layanan" ? 12 : 3,
        width: 55,
        borderRadius: 10,
     
        
    }),
    text: (type) => ({
        fontSize: type === "layanan" ? 14 : 10,
        textAlign: 'center'
    }),

 
})