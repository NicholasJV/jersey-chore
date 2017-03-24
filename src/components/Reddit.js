import React from 'react';
import {
  StyleSheet, Text, View, TextInput, TouchableOpacity,
} from 'react-native';

import { todoStyle } from '../appStyles'

export default class Reddit extends React.Component {
  constructor() {
    super()
    this.state = {
      posts: [],
    }
  }

  componentWillMount(){
    fetch('https://www.reddit.com/.json', {
      Accepts: 'Application/json'
    })
    .then(res => res.json())
    .then(data => {
      this.setState({ posts: data.data.children.slice(0, 10) })
    })
  }

  render () {
    return (
      <View style={todoStyle.todosContainer}>
        {
          this.state.posts.map((item, i) => {
            console.log(item.data.title)
            return (
              <View key={i} style={todoStyle.todoItem}>
                <Text style={todoStyle.todoText}> {item.data.title} </Text>
              </View>
            )
          })
        }
      </View>
    )
  }
}




// import React from 'react';
// import {
//   StyleSheet, Text, View, TextInput, TouchableOpacity,
//   Dimensions, Image
// } from 'react-native';
//
// import { todoStyle } from '../appStyles'
//
// const redditsView = ({reddits}) => (
//       <View style={todoStyle.todosContainer}>
//         {
//           reddits.map((item, i) => {
//             return (
//               <View key={i} style={todoStyle.todoItem}>
//                 <Text style={todoStyle.}> {item} </Text> )
//               </View>
//           })
//         }
//       </View>
// )
//
// export default todosView
