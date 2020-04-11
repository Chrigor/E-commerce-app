import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const settingsTab = (route) => ({
  tabBarIcon: ({focused, color, size}) => {
    let iconName;

    if (route.name === 'Home') {
      iconName = 'home';
    } else if (route.name === 'Cart') {
      iconName = 'shopping-cart';
    }

    return <Icon name={iconName} size={size} color={color} />;
  },
});

export default function Routes() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => settingsTab(route)}
      tabBarOptions={{
        activeTintColor: '#7159c1',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Cart" component={Cart} />
    </Tab.Navigator>
  );
}
