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
      todos: {},
      newTodoTitle: ''
    }
  }

  componentWillMount() {
    // get from firebase.
    this._firebaseTodosRef = firebase.database().ref('todos');
    this._firebaseTodosRef.on('value', (snapshot) => {
      const todos = snapshot.val() //.todos;
      console.log('todos from firebase:', todos)
      this.setState({ todos })
    });

  }

  addTodo (text) {
    // instead of POST, firebase 'push'
    this._firebaseTodosRef.push({
      title: this.state.newTodoTitle
    })
    .then((resRef) => {
      // try to replace the constructing the object here with the actual object from FB?
      let newTodo = { [resRef.key]: {"title": this.state.newTodoTitle.toUpperCase() }}
      let newTodos = Object.assign({}, this.state.todos, newTodo )
      this.setState({ todos: newTodos, newTodoTitle: ''})
      console.log(this.state);
    })
  }

  removeTodo(e, index) {
    // e.preventDefault()
    console.log('todo pressed: ', index)

    //  use react-native-swipeout npm package
    // add ReactAnimation for swipe removal
    // https://facebook.github.io/react/docs/animation.html
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
            <TodosView handleDeleteTodo={this.removeTodo.bind(this)} todos={this.state.todos} />
            {/* <Reddit /> */}
          </Image>
      </View>
    );
  }
}

// possible additions:
// vibrate reorder todo
// priority status
// swipe right for done, then have "done view"
// within done view, swipe left for delete option


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
