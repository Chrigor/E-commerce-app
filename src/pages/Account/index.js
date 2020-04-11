import React from 'react';
import {View, Text} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

function Account() {
  return (
      <View>
        <Text>Account!</Text>
        <Icon name="user" size={20} color="#7159c2" />
      </View>
  );
}

export default Account;
