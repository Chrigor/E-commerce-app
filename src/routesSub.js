import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Product from './pages/Product';
import Products from './pages/Products';
import FavoriteProducts from './pages/FavoriteProducts';
import Notifications from './pages/Notifications';

const Stack = createStackNavigator();

const optionsConfig = {
    headerShown: true,
    headerStyle: {
      backgroundColor: '#e02041',
    },
    headerTintColor: '#fff',
}

function Routes() {
    return (
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
          <Stack.Screen name="Cart" component={Cart} options={{headerShown: false}}/>
          <Stack.Screen name="Product" component={Product} options={{headerShown: false}}/>
          <Stack.Screen name="Products" component={Products} />
          <Stack.Screen name="FavoriteProducts" component={FavoriteProducts} options={optionsConfig}/>
          <Stack.Screen name="Notifications" component={Notifications} options={optionsConfig}/>
        </Stack.Navigator>
    );
  }
  
  export default Routes;