import React from 'react'
import { StyleSheet } from 'react-native'

const todoStyle = StyleSheet.create({
  todosContainer: {
    flex: 12,
    flexDirection: 'column',
    padding: 8,
  },
  todoItem: {
    fontSize: 24,
    padding: 5,
    margin: 7,
    color: 'white',
    backgroundColor: 'rgba(250,250,250,0.5)',
    textShadowColor: 'black',
    textShadowRadius: 3,
    textShadowOffset: { width: 3, height: 0 },
    borderBottomWidth: 3,
    borderBottomColor: 'darkblue',
    fontWeight: 'bold',
  },
});

const formStyle = StyleSheet.create({
  formContainer: {
    flex: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    fontSize: 24,
    fontWeight: 'bold',
    height: 50,
    textAlign: 'left',
    backgroundColor: 'rgba(200,200,240,0.7)',
    color: 'white',
    borderColor: 'yellow',
    borderBottomWidth: 3,
    borderColor: 'black',
    borderRadius: 3,
    paddingLeft: 20,
    margin: 20,
    marginTop: 50,
    marginBottom: 90,
  },
  button: {
    // flex: 3,
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
