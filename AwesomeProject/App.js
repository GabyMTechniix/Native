import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoitem';
import AddTodo from './components/addTodo';

export default function App() {

  const [todos, setTodos] = useState([
    {text:'text1', key:'1'},
    {text:'text2', key:'2'},
    {text:'text3', key:'3'},
  ])

  const pressTodo = (key) =>{
    // filtre or clear todo
    console.log(key);
    setTodos((clearTodo)=>{
      return clearTodo.filter(todo => todo.key != key)
    })
  }

  const onSubmit = (text) =>{
    setTodos((addTodo)=>{
      return[
        {text: text, key:Math.random().toString() },
        ...addTodo
      ];
    })
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <Header/>
      <View style={styles.content}>
        <AddTodo onSubmit={onSubmit}/>
        <View style={styles.list}>
          <FlatList 
            data={todos}
            renderItem={({item})=> (
              <TodoItem item={item} pressTodo={pressTodo}/>
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
