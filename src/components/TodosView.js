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
            return ( <Text key={i} style={todoStyle.todoItem}> {item} </Text> )
          })
        }
      </View>
)

export default todosView
