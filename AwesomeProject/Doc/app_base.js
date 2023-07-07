import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {

  const [person, setPerson] = useState([
    {name:'gaby',key:1},
    {name:'gaby',key:2},
    {name:'gaby',key:3},
    {name:'gaby',key:4},
    {name:'gaby',key:5},
    {name:'Arson', key:6}
  ])

  const pressTouch = (key) => {
    console.log(key);
    setPerson((clearPerson)=>{
      return clearPerson.filter(pers => pers.key != key)
    })
  }


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FlatList
        keyExtractor={(item)=>item.key}
        data={person}
        renderItem={({item})=>(
          <TouchableOpacity pressTouch={pressTouch}>
            <Text style={styles.name}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

     {/* {person.map((item)=>{
      return(
        <View key={item.key}>
          <Text style={styles.name} >{item.name}</Text>
        </View>
      )
     })} */}

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
    marginTop:20,
    padding:50,
  }
});
