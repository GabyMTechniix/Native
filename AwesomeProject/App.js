import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from './components/header';

export default function App() {

  const [todos, setTodos] = useState([
    {text:'text1', key:'1'},
    {text:'text2', key:'2'},
    {text:'text3', key:'3'},
  ])

  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        {/* todo form */}
        <View style={styles.list}>
          <FlatList 
            data={todos}
            renderItem={({item})=> (
              <Text>{item.text}</Text>
            )}
          />
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:5,
    paddingHorizontal:5,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  content:{
    padding:40,
  },
  list:{
    // marginTop:20,
  }
});
