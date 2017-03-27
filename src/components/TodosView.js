import React from 'react';
import {
  StyleSheet, Text, View, TextInput, TouchableHighlight,
  Dimensions, Image
} from 'react-native';

import { todoStyle } from '../appStyles'
import TodoItem from './TodoItem'

const todosView = ({todos, handleDeleteTodo}) => (
      <View style={todoStyle.todosContainer}>
        {
           // here's some nice data tunneling already in a very simple process
           // Use REDUX!

          Object.keys(todos).map((key) => {
            // key will be unique key id from firebase
            return (

              <TodoItem todo={todos[key]} key={key} todoID={key} press={handleDeleteTodo} />

            //   {/* <TouchableHighlight onPress={handleDeleteTodo} key={key} style={todoStyle.todoItem}>
            //     <Text style={todoStyle.todoText}> {todos[key].title.toUpperCase()} </Text>
            //   </TouchableHighlight>
            // ) || (
            //   // this doesn't seem to be working, try out this other lib:
            //   // https://www.npmjs.com/package/react-loading
            //   <View style={todoStyle.todoItem}>
            //     <Text style={todoStyle.todoText}> Loading... </Text> )
            //   </View> */}



            )
          })

        }
      </View>
)

export default todosView
