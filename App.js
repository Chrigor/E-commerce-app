import React from 'react';
import { View, Text } from 'react-native';

import { Provider } from 'react-redux';
import store from './src/store';

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
    <Provider store={store}>
      <NavigationContainer>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
