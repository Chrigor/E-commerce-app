import React from 'react';
import {View, Text} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

function Cart() {
  return (
      <View>
        <Text>Cart!</Text>
        <Icon name="rocket" size={20} color="#7159c2" />
      </View>
  );
}

export default Cart;
