import React from 'react';
import {
  StyleSheet, Text, View, TextInput, TouchableOpacity,
  Dimensions, Image
} from 'react-native';
import firebase from 'firebase'

import { formStyle, todosStyle } from '../appStyles'
import Reddit from './Reddit'
import TodosView from './TodosView'
// import newTodoTitleInput from './src/components/newTodoTitleInput'

const firebaseConfig = require('../util/firebase')
const { height, width } = Dimensions.get('window')

export default class Todo extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: [],
      newTodoTitle: ''
    }
  }

  componentDidMount() {

    // get from firebase.
    console.log('this keyword inside componentDidMount of Todo:', this)
    this._firebaseRef = firebase.database().ref();
    this._firebaseRef.on('value', (snapshot) => {
      const todos = snapshot.val().todos;
      console.log('todos from firebase:', todos)
      this.setState({ todos })
    });

    // fetch('http://localhost:3000/todos', {
    //   'content-type': 'application/json'
    // })
    // .then((res) => {
    //   if(res.ok){
    //     return res.json()
    //   }
    //   throw new Error('Network response error')
    // })
    // .then(todos => {
    //   console.log('initial todos from json-server:', todos)
    //   this.setState({ todos })
    // })
    // .catch((err) => {
    //   console.error('Error fetching todos:', err)
    // })
  }


  addTodo(text) {
    const todos = this.state.todos.concat({ title: this.state.newTodoTitle.toUpperCase() })
      // .concat(this.state.newTodoTitle)
    console.log('todos:', this.state.todos)
    console.log('screen dimensions:  H:', height, 'W:', width)

    // fetch('http://localhost:3000/todos', {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     title: this.state.newTodoTitle
    //   })
    // })
    // .then(res => {
    //   console.log('initial response:', JSON.stringify(res, null, 2))
      // return res.json()
    // })
    // .then(data => {
    //   console.log('post data res:', data)
    // })
    // .catch(err => ( "Error posting data to DB:", err))
    this.setState({ todos })
    this.setState({ newTodoTitle: '' })
  }

  // removeTodo() {
  // add ReactAnimation for swipe removal
  // https://facebook.github.io/react/docs/animation.html
  // }

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
            {/* <newTodoTitleInput /> addTodo={this.addTodo.bind(this)} */}

            <View style={formStyle.formContainer}>
              <View style={formStyle.inputBox}>
                <TextInput
                  value={this.state.newTodoTitle}
                  onChangeText={
                    (text) => this.setState({ newTodoTitle: text })
                  }
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
