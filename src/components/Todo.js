import React from 'react';
import {
  StyleSheet, Text, View, TextInput, TouchableOpacity,
  Dimensions, Image
} from 'react-native';

import { formStyle, todosStyle } from '../appStyles'
import TodosView from './TodosView'
// import NewTodoForm from './src/components/NewTodoForm'

const { height, width } = Dimensions.get('window')

export default class Todo extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: [
        'GYM, TAN, LAUNDRY',
        'GET MONEY OR HUMILIATE YOURSELF TRYING'],
      newTodo: ''
    }
  }

  handlePress(text) {
    const todos = [ ...this.state.todos, this.state.newTodo.toUpperCase() ]
      // .concat(this.state.newTodo)
    console.log('todos:', this.state.todos)
    console.log('screen dimensions:  H:', height, 'W:', width)
    this.setState({ todos })
    this.setState({newTodo: ''})
  }

  render() {
    return (
      <View style={{flex: 1}}>
        {/* <View style={{position: 'absolute', flex: 1}}> */}
          <Image
            // height={height}
            // width={width}
            // Bill smooth af
            // source={{uri: 'http://www.fillmurray.com/420/640'}}
            source={require('../content/theSitchGTL-375x667.png')}
            // style here became unnecessary if we size the image using Dimensions:
            // style={{
            //   // flex: 1,
            //   // resizeMode: 'cover',
            // }}
          >
            {/* <NewTodoForm /> */}

            <View style={formStyle.formContainer}>
              {/* <View style={{flex: 0.5}}> */}
                <TextInput
                  value={this.state.newTodo}
                  onChangeText={(text) => this.setState({ newTodo: text })}
                  type="text" placeholder=" TODO"
                  editable={true} maxLength={50}
                  style={formStyle.input}
                  onSubmitEditing={this.handlePress.bind(this)}
                />
              {/* </View> */}
              {/* <View style={{flex: 0.5}}> */}
                <TouchableOpacity
                  onPress={this.handlePress.bind(this)}
                  style={formStyle.button}>
                  <Text style={{fontSize: 20, color: 'white'}}>
                    CREATE TODO
                  </Text>
                </TouchableOpacity>
              {/* </View> */}
            </View>

            <TodosView todos={this.state.todos} />

          </Image>
        {/* </View> */}
      </View>
    );
  }
}
