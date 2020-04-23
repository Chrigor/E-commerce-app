
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Product from './pages/Product';
import Products from './pages/Products';
import Order from './pages/Order';
import Payment from './pages/Payment';
import Profile from './pages/Profile';
import Address from './pages/Address';
import FavoriteProducts from './pages/FavoriteProducts';
import Notifications from './pages/Notifications';
import RouteSub from './routesSub';

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
          <Stack.Screen name="Home" component={RouteSub} options={{headerShown: false}}/>
          <Stack.Screen name="Product" component={Product} options={{headerShown: false}}/>
          <Stack.Screen name="Products" component={Products} />
          <Stack.Screen name="FavoriteProducts" component={FavoriteProducts} options={optionsConfig}/>
          <Stack.Screen name="Notifications" component={Notifications} options={optionsConfig}/>
          <Stack.Screen name="Order" component={Order} options={optionsConfig}/>
          <Stack.Screen name="Profile" component={Profile} options={optionsConfig}/>
          <Stack.Screen name="Address" component={Address} options={optionsConfig}/>
          <Stack.Screen name="Payment" component={Payment} options={optionsConfig}/>
        </Stack.Navigator>
    );
  }
  
  export default Routes;