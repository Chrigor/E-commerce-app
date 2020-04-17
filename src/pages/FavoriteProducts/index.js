import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, ImageProduct, ContainerProduct, TitleProduct, ContainerInfo } from './style';

const data = [
  {
    id: 1,
    name: 'Generic Shoes',
    category: 'Shoes',
    price: 170.32,
    descont: 17,
    image: [
      'https://d129q82p91aw7f.cloudfront.net/df2f90248bb2/tenis-dc-shoes-heathrow-imp-feminino-feminino.200x200.jpg',
      'https://d129q82p91aw7f.cloudfront.net/df2f90248bb2/tenis-dc-shoes-heathrow-imp-feminino-feminino.200x200.jpg',
      'https://d129q82p91aw7f.cloudfront.net/df2f90248bb2/tenis-dc-shoes-heathrow-imp-feminino-feminino.200x200.jpg',
    ],
    size: [6, 7, 8, 9, 10, 11, 12],
    colors: ['blue', 'yellow', 'gray', 'red'],
    stars: 3
  },
  {
    id: 2,
    name: 'Generic Shoes',
    category: 'Shoes',
    price: 170.32,
    descont: 17,
    image: [
      'https://d129q82p91aw7f.cloudfront.net/df2f90248bb2/tenis-dc-shoes-heathrow-imp-feminino-feminino.200x200.jpg',
      'https://d129q82p91aw7f.cloudfront.net/df2f90248bb2/tenis-dc-shoes-heathrow-imp-feminino-feminino.200x200.jpg',
      'https://d129q82p91aw7f.cloudfront.net/df2f90248bb2/tenis-dc-shoes-heathrow-imp-feminino-feminino.200x200.jpg',
    ],
    size: [6, 7, 8, 9, 10, 11, 12],
    colors: ['blue', 'yellow', 'gray', 'red'],
    stars: 3
  },
  {
    id: 3,
    name: 'Generic Shoes',
    category: 'Shoes',
    price: 170.32,
    descont: 17,
    image: [
      'https://d129q82p91aw7f.cloudfront.net/df2f90248bb2/tenis-dc-shoes-heathrow-imp-feminino-feminino.200x200.jpg',
      'https://d129q82p91aw7f.cloudfront.net/df2f90248bb2/tenis-dc-shoes-heathrow-imp-feminino-feminino.200x200.jpg',
      'https://d129q82p91aw7f.cloudfront.net/df2f90248bb2/tenis-dc-shoes-heathrow-imp-feminino-feminino.200x200.jpg',
    ],
    size: [6, 7, 8, 9, 10, 11, 12],
    colors: ['blue', 'yellow', 'gray', 'red'],
    stars: 3
  },

];

function FavoriteProducts() {
  const route = useRoute();
  const navigation = useNavigation();

  console.log(route.params);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data);
  }, []);

  function navigateToProducts(product) {
    navigation.navigate('Product', product);
  }

  function renderProducts({ item }) {
    return (
      <ContainerProduct onPress={() => navigateToProducts(item)}>
        <ImageProduct source={{ uri: item.image[0] }} />
        <ContainerInfo>
          <TitleProduct>{item.name}</TitleProduct>
          <Text>{item.description}</Text>
        </ContainerInfo>
        <TouchableOpacity onPress={() => alert(item.id)}>
          <Icon name="trash" size={22} color="#e02041" />
        </TouchableOpacity>
      </ContainerProduct>
    );
  }

  return (
    <Container>
      {products.length > 0 && (
        <FlatList
          data={products}
          renderItem={renderProducts}
          keyExtractor={(item) => (item.id).toString()}
          horizontal={false}
          showsHorizontalScrollIndicator={false}
        />
      )}
      {products.length <= 0 && <Text>You not have Favorite Products</Text>}
    </Container>
  );
}

export default FavoriteProducts;
