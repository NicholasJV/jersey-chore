import React from 'react'
import { StyleSheet } from 'react-native'

const todoStyle = StyleSheet.create({
  todosContainer: {
    flex: 12,
    flexDirection: 'column',
    padding: 8,
  },
  todoItem: {
    padding: 5,
    margin: 7,
    backgroundColor: 'rgba(250,250,250,0.5)',
    borderBottomWidth: 3,
    borderBottomColor: 'darkblue',
    borderRadius: 5,
  },
  todoText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    textShadowColor: 'black',
    textShadowOffset: { width: 0.1, height: 0.1 },
    textShadowRadius: 3,
  }
});

const formStyle = StyleSheet.create({
  formContainer: {
    flex: 5,
  },
  inputBox: {
    backgroundColor: 'rgba(76, 115, 154, 0.4)',
    borderBottomWidth: 3,
    borderColor: 'black',
    margin: 20,
    marginTop: 20,
    marginBottom: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    fontSize: 20,
    fontWeight: 'bold',
    height: 36,
    textAlign: 'left',
    color: 'white',
    borderColor: 'yellow',
    borderRadius: 3,
    paddingLeft: 20,
  },
  // not used right now:
  button: {
    height: 30,
    width: 200,
    borderRadius: 15,
    backgroundColor: 'rgba(70, 99, 141, 0.9)',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    marginTop: 40,
  },
})

export { todoStyle, formStyle }
