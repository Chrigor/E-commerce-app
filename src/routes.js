import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Account from './pages/Account';
import Explore from './pages/Explore';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const settingsTab = (route) => ({
  tabBarIcon: ({focused, color, size}) => {
    let iconName;

    if (route.name === 'Home') {
      iconName = 'home';
    } else if (route.name === 'Cart') {
      iconName = 'shopping-cart';
    } else if (route.name === 'Account') {
      iconName = 'user';
    } else if (route.name == 'Explore') {
      iconName = 'search';
    }

    return <Icon name={iconName} size={size} color={color} />;
  },
});

export default function Routes() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => settingsTab(route)}
      tabBarOptions={{
        activeTintColor: '#FFF',
        inactiveTintColor: '#ccc',
        keyboardHidesTabBar:true,
        style: {
          backgroundColor: '#e02041',
        },
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
}
