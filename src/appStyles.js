import React from 'react'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundImage: '' // doesn't work :)
  },
  todosContainer: {
    flex: 6,
    flexDirection: 'column',
    padding: 10,
    paddingTop: 30
  },
  todoItem: {
    fontSize: 24,
    padding: 5,
    margin: 7,
    color: 'white',
    backgroundColor: 'rgba(250,250,250,0.5)',
    textShadowColor: 'black',
    textShadowRadius: 2,
    textShadowOffset: {width: 2, height:2},
    borderBottomWidth: 3,
    borderBottomColor: 'darkblue',
    fontWeight: 'bold',
  },
  formContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(240,240,240,0.5)'
  },
  backgroundImage:{
    // justifyContent: 'center',
    // alignItems: 'center',
    flex: 1,
    resizeMode:
      // 'contain'
      'cover',
      // 'stretch'
      // 'center'
  },
  input: {
    fontSize: 25,
    height: 30,
    backgroundColor: 'rgba(200,200,240,0.5)',
    textAlign: 'center',
    borderColor: 'black',
    borderWidth: 1,
    margin: 20
  },
  button: {
    height: 30,
    width: 260,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: 'rgba(200,200,240,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 30
  },
});

export default styles
