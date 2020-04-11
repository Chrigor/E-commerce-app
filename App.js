import React from 'react';
import { View, Text } from 'react-native';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/FontAwesome';

function App() {
  return (
    <NavigationContainer>
      <View>
        <Text>
          Hello!
        </Text>
        <Icon name="rocket" size={20} color="#7159c2" />
      </View>
    </NavigationContainer>
  );
}

export default App;
