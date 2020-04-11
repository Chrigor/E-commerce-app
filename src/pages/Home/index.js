import React from 'react';
import {View, Text} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

function Home() {
  return (
      <View>
        <Text>Home!</Text>
        <Icon name="rocket" size={20} color="#7159c2" />
      </View>
  );
}

export default Home;
