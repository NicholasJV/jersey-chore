import React from 'react';
import ReactNative from 'react-native';
import App from './App';

import renderer from 'react-test-renderer';

import Todo from './src/components/Todo';

it('renders without crashing', () => {
  // console.log(renderer.create(<App />).toJSON())
  const rendered = renderer.create(<App />).toJSON();
  // return renderer.create(<App />).toJSON();
});

// it('fetches todos from development json-server' () => {
//   const todo =
// })
// // TODO: add post request test
