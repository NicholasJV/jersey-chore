import React from 'react';
import {
  StyleSheet, Text, View, TextInput, TouchableOpacity, ListView, FlatList
} from 'react-native';



export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: [1,2,3,4,5],
      newTodo: ''
    }
    // this.handleChange = this.handleChange.bind(this)
  }

  //
  // handleChange(text) {
  //   this.setState({ newTodo: text })
  // }

  handlePress(text) {
    const todos = [ ...this.state.todos, this.state.newTodo ]
      // .concat(this.state.newTodo)
    console.log(this.state.todos)
    this.setState({ todos })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.todosContainer}>
          {/* <FlatList
            data={this.state.todos}
            renderItem={({item}) => <Text>{item.key}</Text>}
          /> */}
        {
          this.state.todos.map((item, i) => {
            return ( <Text key={i}> {item} </Text> )
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
            <Text>create todo</Text>
          </TouchableOpacity>
          <Text>Changes you make will automatically reload.</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  todosContainer: {
    flex: 3,
    // fontSize: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 30,
    borderColor: 'blue',
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 30,
    backgroundColor: 'powderblue',
    textAlign: 'center',
    borderColor: 'blue',
    borderWidth: 3
  }
});
