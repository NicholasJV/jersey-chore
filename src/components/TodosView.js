import React from 'react';
import {
  StyleSheet, Text, View, TextInput, TouchableOpacity,
  Dimensions, Image
} from 'react-native';

import { todoStyle } from '../appStyles'

const todosView = ({todos}) => (
      <View style={todoStyle.todosContainer}>
        {
          todos.map((item, i) => {
            return (
              <View key={i} style={todoStyle.todoItem}>
                <Text style={todoStyle.todoText}> {item} </Text> 
              </View>
            )
          })
        }
      </View>
)

export default todosView
