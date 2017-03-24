import React from 'react';
import {
  StyleSheet, Text, View, TextInput, TouchableOpacity,
  Dimensions, Image
} from 'react-native';

import { formStyle, todosStyle } from '../appStyles'
import Reddit from './Reddit'
import TodosView from './TodosView'
// import NewTodoInput from './src/components/NewTodoInput'

const { height, width } = Dimensions.get('window')

export default class Todo extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: [],
      newTodo: ''
    }
  }

  componentWillMount() {
    fetch('http://localhost:3000/todos', {
      'content-type': 'application/json'
    })
    .then((res) => {
      if(res.ok){
        return res.json()
      }
      throw new Error('Network response error')
    })
    .then(todos => {
      // console.log('initial todos from json-server:', todos)
      this.setState({ todos })
    })
    .catch((err) => {
      console.error('Error fetching todos:', err)
    })
  }

  addTodo(text) {
    const todos = [ ...this.state.todos, this.state.newTodo.toUpperCase() ]
      // .concat(this.state.newTodo)
    console.log('todos:', this.state.todos)
    console.log('screen dimensions:  H:', height, 'W:', width)
    this.setState({ todos })
    this.setState({ newTodo: '' })
  }

  removeTodo() {

  }

  render() {
    return (
      <View style={{flex: 1}}>
          <Image
            height={height}
            width={width}
            // IMAGE OPTIONS:
            // Bill smooth af:
            // source={{uri: 'http://www.fillmurray.com/420/640'}}
            source={require('../content/theSitchGTL-375x667.png')}
            // style here became unnecessary, replaced by Dimensions:
            // style={{ flex: 1, resizeMode: 'cover', }}
          >
            {/* <NewTodoInput /> addTodo={this.addTodo.bind(this)} */}

            <View style={formStyle.formContainer}>
              <View style={formStyle.inputBox}>
                <TextInput
                  value={this.state.newTodo}
                  onChangeText={(text) => this.setState({ newTodo: text })}
                  type="text" placeholder=" TODO"
                  editable={true} maxLength={50}
                  onSubmitEditing={this.addTodo.bind(this)}
                  returnKeyType={'done'}
                  style={formStyle.input}
                />
              </View>
            </View>
            <TodosView todos={this.state.todos} />
            {/* <Reddit /> */}
          </Image>
      </View>
    );
  }
}


{/*
  // This is what a create todo button would look like:
  // but changed add todo function to fire on input text return
  <TouchableOpacity
    onPress={this.addTodo.bind(this)}
    style={formStyle.button}>
    <Text style={{fontSize: 20, color: 'white'}}>
      CREATE TODO
    </Text>
  </TouchableOpacity>
*/}
