import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default function Header() {
  return (
    <View style={styles.header}>
        <Text style={styles.title}>My Todos</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        height:80,
        paddingTop:30,
        backgroundColor:'coral',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
        fontSize:30,
        fontWeight:'800',
        color:'#fff',
    }
  });