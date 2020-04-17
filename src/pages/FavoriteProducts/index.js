import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, ImageProduct, ContainerProduct, TitleProduct, ContainerInfo } from './style';

const data = [
  {
    id: 3,
    name: 'PlayStation 4',
    price: 1999.0,
    descont: 17,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTkCgUZSRerRIwnBIy_ZaDC_MDrblpVlDK64WQk27mcFiTR8LHX&usqp=CAU',
    description:'asudhaushduash'
  },
  {
    id: 4,
    name: 'Computador',
    price: 1500,
    descont: 17,
    image: 'https://im.promobit.com.br/596936167515656316373820387704.jpg',
    description:'asudhaushduash'
  },
  {
    id: 6,
    name: 'Armario',
    price: 599,
    descont: 17,
    image: 'https://img.ijacotei.com.br/produtos/200/200/59/10/13991059.jpg',
    description:'asudhaushduash'
  },
  {
    id: 1,
    name: 'Shoes',
    price: 170.32,
    descont: 17,
    image:
      'https://d129q82p91aw7f.cloudfront.net/df2f90248bb2/tenis-dc-shoes-heathrow-imp-feminino-feminino.200x200.jpg',
      description:'asudhaushduash'
  },
  {
    id: 5,
    name: 'Pelucia',
    price: 10.99,
    descont: 17,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSTXks0DE_KJG13MJ1fa2XoZ-tnLKtUlIUy_5fojcRaadkhsxwp&usqp=CAU',
      description:'asudhaushduash'
  },
  {
    id: 2,
    name: 'T-Shirt',
    price: 50.99,
    descont: 17,
    image:
      'https://www.harlandclarkepromo.com/images/shared/catalog200x200/APPAREL1493819134/800_ebdcc9_p1-200x200.jpg',
      description:'asudhaushduash'
  },
];

function FavoriteProducts() {
  const route = useRoute();

  console.log(route.params);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data);
  }, []);

  function renderProducts({ item }) {
    return (
      <ContainerProduct>
        <ImageProduct source={{ uri: item.image }} />
        <ContainerInfo>
          <TitleProduct>{item.name}</TitleProduct>
          <Text>{item.description}</Text>
        </ContainerInfo>
        <TouchableOpacity onPress={() => alert(item.id)}>
          <Icon name="trash" size={22} color="#e02041"/>
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
            keyExtractor={(item) => item.id}
            horizontal={false}
            showsHorizontalScrollIndicator={false}
          />
        )}
        {products.length <= 0 && <Text>You not have Favorite Products</Text>}
    </Container>
  );
}

export default FavoriteProducts;
