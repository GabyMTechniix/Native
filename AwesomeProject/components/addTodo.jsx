import React, { useState } from 'react'
import { Text, StyleSheet, Button, View, TextInput } from 'react-native'

export default function AddTodo({onSubmit}) {

    const [text, setText] = useState([])

    const changeInput = (val) =>{
        setText(val);
    }

  return (
    <View>
        <TextInput
            style={styles.input}
            placeholder='new todo...'
            onChangeText={changeInput}
        />
        <Button title="add" color="coral" onPress={()=>onSubmit(text)} />
    </View>
  )
}

const styles = StyleSheet.create({
    input:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:'#000'
    }
})