import React from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Navigation from './src/navigation'

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <Navigation />
    </NavigationContainer>
  )
};


export default App;
