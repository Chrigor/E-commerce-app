import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import {Container, Option, Name, Header, IconMenu} from './style';
import { useNavigation } from '@react-navigation/native';

function Account() {

  const navigation = useNavigation();

  function navigateTo(rota){
    navigation.navigate(rota);
  }

  return (
      <Container>
        <Header>
          Account
        </Header>

        <Option onPress={() => navigateTo('Profile')}>
          <IconMenu name="user" size={24} color="#e02041"/>
          <Name>Profile</Name>
        </Option>

        <Option onPress={() => navigateTo('Order')}>
          <IconMenu name="list" size={24} color="#e02041"/>
          <Name>Order</Name>
        </Option>

        <Option onPress={() => navigateTo('Address')}>
          <IconMenu name="map-marker" size={24} color="#e02041"/>
          <Name>Address</Name>
        </Option>

        <Option onPress={() => navigateTo('Payment')}>
          <IconMenu name="credit-card" size={24} color="#e02041"/>
          <Name>Payment</Name>
        </Option>

      </Container>
  );
}

export default Account;
