import React from 'react';
import {
  StyleSheet, Text, View, TextInput, TouchableOpacity,
  Dimensions, Image
} from 'react-native';
import firebase from 'firebase'

import Todo from './src/components/Todo'
import { formStyle, todosStyle } from './src/appStyles'
import TodosView from './src/components/TodosView'
// import newTodoTitleInput from './src/components/newTodoTitleInput'

const firebaseConfig = require('./src/util/firebase')

firebase.initializeApp(firebaseConfig)

const App = () => ( <Todo /> )

export default App
