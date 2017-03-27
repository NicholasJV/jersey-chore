import React from 'react';
import {
  StyleSheet, Text, View, TextInput, TouchableOpacity,
  Dimensions, Image
} from 'react-native';

import { todoStyle } from '../appStyles'

const todosView = ({todos}) => (
      <View style={todoStyle.todosContainer}>
        {

          // now it's an object in FB instead of array

          Object.keys(todos).map((key) => {
            // key will be unique key id from firebase
            return (
              <View key={key} style={todoStyle.todoItem}>
                <Text style={todoStyle.todoText}> {todos[key].title.toUpperCase()} </Text>
              </View>
            )
          })
        }
      </View>
)

export default todosView
