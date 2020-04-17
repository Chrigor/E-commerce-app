import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, ImageProduct, ContainerProduct, TitleProduct, ContainerInfo, Description } from './style';

const data = [
  {
    id: 1,
    name: 'Generic Shoes',
    description:'Lorem ipsum ultricies eleifend sapien tristique ut eros, sapien aliquam velit venenatis ut potenti. habitasse senectus elit vestibulum aliquam cras pulvinar platea mauris euismod ligula accumsan, convallis sem metus rhoncus viverra augue gravida accumsan ultricies primis, cursus dapibus faucibus adipiscing nulla lectus sodales risus ut integer. accumsan dui potenti torquent dictum duis diam nisl, quam non platea nam massa porta, enim aenean cursus curae sociosqu condimentum. integer nostra id diam ultricies lectus mi proin, sodales nunc vel porta mattis ut ullamcorper aliquam, suscipit porttitor elit quis consequat pharetra. porta lacus curabitur diam tristique malesuada congue torquent nisi lectus, egestas et mi tellus praesent neque augue rutrum, enim posuere vitae aenean ultricies inceptos ut pulvinar.',
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
    stars: 3,
    lastReview: {}
  },
  {
    id: 2,
    name: 'Generic Shoes',
    description:'Lorem ipsum ultricies eleifend sapien tristique ut eros, sapien aliquam velit venenatis ut potenti. habitasse senectus elit vestibulum aliquam cras pulvinar platea mauris euismod ligula accumsan, convallis sem metus rhoncus viverra augue gravida accumsan ultricies primis, cursus dapibus faucibus adipiscing nulla lectus sodales risus ut integer. accumsan dui potenti torquent dictum duis diam nisl, quam non platea nam massa porta, enim aenean cursus curae sociosqu condimentum. integer nostra id diam ultricies lectus mi proin, sodales nunc vel porta mattis ut ullamcorper aliquam, suscipit porttitor elit quis consequat pharetra. porta lacus curabitur diam tristique malesuada congue torquent nisi lectus, egestas et mi tellus praesent neque augue rutrum, enim posuere vitae aenean ultricies inceptos ut pulvinar.',
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
    stars: 3,
    lastReview: {
      idUser: 3,
      photo:'https://img.pngio.com/png-avatar-108-images-in-collection-page-3-png-avatar-300_300.png',
      comment:'Turpis dictum fringilla et neque vitae quisque, condimentum tincidunt nec arcu dapibus class eu, molestie risus id sit faucibus. vestibulum odio ad vehicula donec netus posuere urna donec class,',
      stars: 3
    }
  },
  {
    id: 3,
    name: 'Generic Shoes',
    description:'Lorem ipsum ultricies eleifend sapien tristique ut eros, sapien aliquam velit venenatis ut potenti. habitasse senectus elit vestibulum aliquam cras pulvinar platea mauris euismod ligula accumsan, convallis sem metus rhoncus viverra augue gravida accumsan ultricies primis, cursus dapibus faucibus adipiscing nulla lectus sodales risus ut integer. accumsan dui potenti torquent dictum duis diam nisl, quam non platea nam massa porta, enim aenean cursus curae sociosqu condimentum. integer nostra id diam ultricies lectus mi proin, sodales nunc vel porta mattis ut ullamcorper aliquam, suscipit porttitor elit quis consequat pharetra. porta lacus curabitur diam tristique malesuada congue torquent nisi lectus, egestas et mi tellus praesent neque augue rutrum, enim posuere vitae aenean ultricies inceptos ut pulvinar.',
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
    stars: 3,
    lastReview: {
      idUser: 3,
      photo:'https://img.pngio.com/png-avatar-108-images-in-collection-page-3-png-avatar-300_300.png',
      comment:'Turpis dictum fringilla et neque vitae quisque, condimentum tincidunt nec arcu dapibus class eu, molestie risus id sit faucibus. vestibulum odio ad vehicula donec netus posuere urna donec class,',
      stars: 3
    }
  },
]

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
          <Description>{item.description}</Description>
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
