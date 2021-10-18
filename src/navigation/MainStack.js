import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import List from '../Screen/List';
import FullScreenImage from '../Screen/FullScreenImage';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="List"
        component={List}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="FullScreenImage"
        component={FullScreenImage}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
