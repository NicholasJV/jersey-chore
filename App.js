import React from 'react';
import {
  StyleSheet, Text, View, TextInput, TouchableOpacity,
  Dimensions, Image
} from 'react-native';

import Todo from './src/components/Todo'
import { formStyle, todosStyle } from './src/appStyles'
import TodosView from './src/components/TodosView'
// import NewTodoForm from './src/components/NewTodoForm'

const { height, width } = Dimensions.get('window')

const App = () => ( <Todo /> )

export default App
// export default class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       todos: [
//         'GYM, TAN, LAUNDRY',
//         'GET MONEY OR HUMILIATE YOURSELF TRYING'],
//       newTodo: ''
//     }
//   }
//
//   handlePress(text) {
//     const todos = [ ...this.state.todos, this.state.newTodo.toUpperCase() ]
//       // .concat(this.state.newTodo)
//     console.log('todos:', this.state.todos)
//     console.log('screen dimensions:  H:', height, 'W:', width)
//     this.setState({ todos })
//   }
//
//   render() {
//     return (
//       <View style={{flex: 1}}>
//         {/* <View style={{position: 'absolute', flex: 1}}> */}
//           <Image
//             // height={height}
//             // width={width}
//             // Bill smooth af
//             // source={{uri: 'http://www.fillmurray.com/420/640'}}
//             source={require('./src/content/theSitchGTL-375x667.png')}
//             // style here became unnecessary if we size the image using Dimensions:
//             // style={{
//             //   // flex: 1,
//             //   // resizeMode: 'cover',
//             // }}
//           >
//             {/* <NewTodoForm /> */}
//
//             <View style={formStyle.formContainer}>
//               {/* <View style={{flex: 0.5}}> */}
//                 <TextInput
//                   value={this.state.newTodo}
//                   onChangeText={(text) => this.setState({ newTodo: text })}
//                   type="text" placeholder=" TODO"
//                   editable={true} maxLength={50}
//                   style={formStyle.input}
//                 />
//               {/* </View> */}
//               {/* <View style={{flex: 0.5}}> */}
//                 <TouchableOpacity
//                   onPress={this.handlePress.bind(this)}
//                   style={formStyle.button}>
//                   <Text style={{fontSize: 20, color: 'white'}}>
//                     CREATE TODO
//                   </Text>
//                 </TouchableOpacity>
//               {/* </View> */}
//             </View>
//
//             <TodosView todos={this.state.todos} />
//
//           </Image>
//         {/* </View> */}
//       </View>
//     );
//   }
// }
