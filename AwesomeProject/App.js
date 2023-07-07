import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [person, setPerson] = useState([
    {name:'gaby',key:4},
    {name:'Arson', key:5}
  ])


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

     {person.map((item)=>{
      return(
        <View>
          <Text style={styles.name} key={item.key}>{item.name}</Text>
        </View>
      )
     })}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:40,
    paddingHorizontal:20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  name:{
    color:'blue',
    fontWeight:'bold',
    backgroundColor:'yellow',
    borderColor:'black',
    borderWidth:1,
    marginTop:5
  }
});
