import 'react-native-gesture-handler';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from '../screens/Home';
import Welcome from '../screens/Welcome';

const Stack = createStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default RootStack;
