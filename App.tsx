/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import MainStack from './src/navigation/MainStack';
import { NavigationContainer } from '@react-navigation/native';
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./src/redux/reducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <MainStack></MainStack>
  </NavigationContainer>
  </Provider>
  );
};



export default App;
