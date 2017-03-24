import React from 'react';
import {
  StyleSheet, Text, View, TextInput, TouchableOpacity,
  Dimensions, Image
} from 'react-native';

import styles from '../appStyles'

export default class NewTodoInput extends React.Component {

  render () {
    return (
      <View style={formStyle.formContainer}>
        <View style={formStyle.inputBox}>
          <TextInput
          value={this.state.newTodo}
          onChangeText={(text) => this.setState({ newTodo: text })}
          type="text" placeholder=" TODO"
          editable={true} maxLength={50}
          style={formStyle.input}
          onSubmitEditing={this.addTodo.bind(this)}
          returnKeyType={'done'}
          />
        </View>
          {/*
            // This is what a create todo button would look like,
            // but changed add todo function to fire on input text return
            <TouchableOpacity
            onPress={this.addTodo.bind(this)}
            style={formStyle.button}>
            <Text style={{fontSize: 20, color: 'white'}}>
              CREATE TODO
            </Text>
          </TouchableOpacity> */}
      </View>
    )
  }
}
