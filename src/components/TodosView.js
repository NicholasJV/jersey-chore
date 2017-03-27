import React from 'react';
import {
  StyleSheet, Text, View, TextInput, TouchableHighlight,
  Dimensions, Image
} from 'react-native';

import { todoStyle } from '../appStyles'

const todosView = ({todos, handleDeleteTodo}) => (
      <View style={todoStyle.todosContainer}>
        {
          /**
           * <TodoItem />
           */

           // here's some nice data tunneling already in a very simple process
           // Use REDUX!

          Object.keys(todos).map((key) => {
            // key will be unique key id from firebase
            return (
              // {/*
              //
              // <TodoItem todo={todos[key]} key={key} press={handleDeleteTodo} />
              //
              //  */}


              <TouchableHighlight onPress={handleDeleteTodo} key={key} style={todoStyle.todoItem}>
                <Text style={todoStyle.todoText}> {todos[key].title.toUpperCase()} </Text>
              </TouchableHighlight>
            )
          })
        }
      </View>
)

export default todosView
