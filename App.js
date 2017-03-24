import React from 'react';
import {
  StyleSheet, Text, View, TextInput, TouchableOpacity,
  Dimensions, Image
} from 'react-native';

import Todo from './src/components/Todo'
import { formStyle, todosStyle } from './src/appStyles'
import TodosView from './src/components/TodosView'
// import NewTodoInput from './src/components/NewTodoInput'

const { height, width } = Dimensions.get('window')

const App = () => ( <Todo /> )

export default App
