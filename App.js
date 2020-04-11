import React from 'react';
import {View, Text} from 'react-native';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome';

import Routes from './src/routes';

function App() {
  return (
    <NavigationContainer>
        <Routes />
    </NavigationContainer>
  );
}

export default App;
