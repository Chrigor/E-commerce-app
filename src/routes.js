import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './pages/Home';
import Cart from './pages/Cart';


const Tab = createBottomTabNavigator();

export default function Routes(){
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="Cart" component={Cart}/>
        </Tab.Navigator>
    )
}