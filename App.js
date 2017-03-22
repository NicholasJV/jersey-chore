import React from 'react';
import {
  StyleSheet, Text, View, TextInput, TouchableOpacity,
  Dimensions, Image
} from 'react-native';

import styles from './src/appStyles'

const { height, width } = Dimensions.get('window')

export default class App extends React.Component {
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
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <View style={{position: 'absolute', flex: 1}}> */}
          <Image
            height={height}
            width={width}
            // source={{uri: 'http://www.fillmurray.com/420/640'}}
            source={require('./src/content/theSitchGTL-375x667.png')}
            style={styles.backgroundImage}>

            <View style={styles.todosContainer}>
            {
              this.state.todos.map((item, i) => {
                return ( <Text key={i} style={styles.todoItem}> {item} </Text> )
              })
            }
            </View>
            <View style={styles.formContainer}>
              <TextInput
                value={this.state.newTodo}
                onChangeText={(text) => this.setState({ newTodo: text })}
                type="text" placeholder="todo"
                editable={true} maxLength={50}
                style={styles.input} />
              <TouchableOpacity
                onPress={this.handlePress.bind(this)}
                style={styles.button}>
                <Text style={{fontSize: 25}}>
                  create todo
                </Text>
              </TouchableOpacity>
              {/* <Text>Changes you make will automatically reload.</Text> */}
            </View>
          </Image>
        {/* </View> */}
      </View>
    );
  }
}
