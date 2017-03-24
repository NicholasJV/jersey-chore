import React from 'react';
import {
  StyleSheet, Text, View, TextInput, TouchableOpacity,
  Dimensions, Image
} from 'react-native';

import styles from '../appStyles'



export default class NewTodoForm extends React.Component {

  render () {
    return (
      <View style={styles.formContainer}>
        <TextInput
          value={this.props.newTodo}

          // fix setState, pass a prop function
          onChangeText={(text) => this.setState({ newTodo: text })}

          type="text" placeholder="todo"
          editable={true} maxLength={50}
          style={styles.input} />
        <TouchableOpacity
          onPress={this.props.handlePress.bind(this)}
          style={styles.button}>
          <Text style={{fontSize: 25}}>
            create todo
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}
