import React from 'react';
import { View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import { Container, SearchInput, Header, IconMargin } from './style';

function Home() {
  return (
    <Container>
      <Header>
        <SearchInput
          inlineImageLeft='icon'
          inlineImagePadding={25}
          placeholder="Search Product"
        />

        <IconMargin name="heart" size={24} color="#eee"/>
        <IconMargin name="bell" size={24} color="#eee"/>

      </Header>

    </Container>
  );
}

export default Home;
