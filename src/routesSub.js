import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Home';
import Products from './pages/Products';

const Stack = createStackNavigator();

const optionsConfig = {
    headerShown: false
}

function Routes() {
    return (
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={optionsConfig}/>
          <Stack.Screen name="Products" component={Products} options={optionsConfig}/>
        </Stack.Navigator>
    );
  }
  
  export default Routes;