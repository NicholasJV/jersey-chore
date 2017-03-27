import React from 'react';
import {
  StyleSheet, Text, View, TextInput, TouchableHighlight,
} from 'react-native';

import { todoStyle } from '../appStyles'

// export default class TodoItem extends React.Component {
  // constructor(){
  //   super(props)
  // }

const TodoItem = ({todo, press, todoID}) => {
  // "press" function is being passed all the way down from top-level todos
  // REDUX

  const todoPressed = (e) => {
    console.log('todo pressed:', todoID)

    press(e, todoID)
  }

    return (
      <TouchableHighlight
        onPress={todoPressed} //key={key}
        style={todoStyle.todoItem}>

        <Text style={todoStyle.todoText}> {todo.title.toUpperCase()} </Text>
      </TouchableHighlight>
    )
}

export default TodoItem


// from StOver:
/**
 *
 *
 *
    Create component and pass down both the index and the press function as properties
    Create a new function that will call your initial press function but now passing
      through both the event and the index...let me know if you want me to clarify further

    Can't just pass down properties to RN's components other than the ones they have defined.
    In order to use properties that are not given in their docs you have to
    create your own component that wraps their components and pass your own properties and
    do your own logic through that process.
    This is the RN way to do it.
 *
 *
 *
 */
