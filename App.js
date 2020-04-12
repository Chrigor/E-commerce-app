import React from 'react';
import { View, Text } from 'react-native';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import { ThemeProvider } from 'styled-components';

import Routes from './src/routes';


const theme = {
  color: '#e02041',
  background: '#fff'
}

function App() {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </NavigationContainer>
  );
}

export default App;
