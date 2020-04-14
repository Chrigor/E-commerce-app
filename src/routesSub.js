import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Home';
import Products from './pages/Products';
import FavoriteProducts from './pages/FavoriteProducts';
import Notifications from './pages/Notifications';

const Stack = createStackNavigator();

const optionsConfig = {
    headerShown: false
}

function Routes() {
    return (
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={optionsConfig}/>
          <Stack.Screen name="Products" component={Products} options={optionsConfig}/>
          <Stack.Screen name="FavoriteProducts" component={FavoriteProducts} options={optionsConfig}/>
          <Stack.Screen name="Notifications" component={Notifications} options={optionsConfig}/>
        </Stack.Navigator>
    );
  }
  
  export default Routes;