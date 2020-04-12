import React from 'react';
import { View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import { Container, SearchInput } from './style';

function Home() {
  return (
    <Container>
      <SearchInput />
      <Icon name="home" size={20} color="#7159c2" />
    </Container>
  );
}

export default Home;
