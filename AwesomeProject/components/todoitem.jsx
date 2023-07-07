import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function TodoItem({item, pressTodo}) {
  return (
    <TouchableOpacity onPress={()=>pressTodo(item.key)}>
        <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    item: {
        padding:10,
        marginTop:10,
        borderColor:'#bbb',
        borderWidth:1,
        borderStyle:'dashed',
        borderRadius:10
    },
  });