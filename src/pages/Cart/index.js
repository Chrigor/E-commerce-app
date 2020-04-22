import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Container, Header, TitleHeader, Quantity, ContainerInfoOrder, ContainerInfo, ContainerNameAndPrice, ContainerQuantity, ContainerFlatList, ProductContainer, ImageProduct, TextCategory } from './style';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const dataProductsSearchExample = [
  {
    id: 1,
    name: 'T-Short',
    description:
      'Lorem ipsum ultricies eleifend sapien tristique ut eros, sapien aliquam velit venenatis ut potenti. habitasse senectus elit vestibulum aliquam cras pulvinar platea mauris euismod ligula accumsan, convallis sem metus rhoncus viverra augue gravida accumsan ultricies primis, cursus dapibus faucibus adipiscing nulla lectus sodales risus ut integer. accumsan dui potenti torquent dictum duis diam nisl, quam non platea nam massa porta, enim aenean cursus curae sociosqu condimentum. integer nostra id diam ultricies lectus mi proin, sodales nunc vel porta mattis ut ullamcorper aliquam, suscipit porttitor elit quis consequat pharetra. porta lacus curabitur diam tristique malesuada congue torquent nisi lectus, egestas et mi tellus praesent neque augue rutrum, enim posuere vitae aenean ultricies inceptos ut pulvinar.',
    category: 'T-Shirt',
    price: 59.90,
    descont: 11,
    image: [
      'https://taco.vteximg.com.br/arquivos/ids/332477-1001-1501/18592_C002_1-T-SHIRT-BASICA-COMFORT-INFANTIL-MASCULINO.jpg?v=636927667397330000',
      'https://taco.vteximg.com.br/arquivos/ids/332477-1001-1501/18592_C002_1-T-SHIRT-BASICA-COMFORT-INFANTIL-MASCULINO.jpg?v=636927667397330000',
      'https://taco.vteximg.com.br/arquivos/ids/332477-1001-1501/18592_C002_1-T-SHIRT-BASICA-COMFORT-INFANTIL-MASCULINO.jpg?v=636927667397330000',
    ],
    size: [50, 60, 70, 80],
    colors: ['blue', 'white', 'gray', 'red'],
    stars: 5,
    lastReview: {},
  },
  {
    id: 2,
    name: 'Pantufas',
    description:
      'Lorem ipsum ultricies eleifend sapien tristique ut eros, sapien aliquam velit venenatis ut potenti. habitasse senectus elit vestibulum aliquam cras pulvinar platea mauris euismod ligula accumsan, convallis sem metus rhoncus viverra augue gravida accumsan ultricies primis, cursus dapibus faucibus adipiscing nulla lectus sodales risus ut integer. accumsan dui potenti torquent dictum duis diam nisl, quam non platea nam massa porta, enim aenean cursus curae sociosqu condimentum. integer nostra id diam ultricies lectus mi proin, sodales nunc vel porta mattis ut ullamcorper aliquam, suscipit porttitor elit quis consequat pharetra. porta lacus curabitur diam tristique malesuada congue torquent nisi lectus, egestas et mi tellus praesent neque augue rutrum, enim posuere vitae aenean ultricies inceptos ut pulvinar.',
    category: 'Shoes',
    price: 39.00,
    descont: 17,
    image: [
      'https://www.pantufas.com.br/arquivos/categorias_pantufas3d.png?v=636979505582000000',
      'https://www.pantufas.com.br/arquivos/categorias_pantufas3d.png?v=636979505582000000',
      'https://www.pantufas.com.br/arquivos/categorias_pantufas3d.png?v=636979505582000000',
    ],
    size: [5, 8, 10],
    colors: ['blue', 'yellow', 'gray', 'red'],
    stars: 2,
    lastReview: {
      idUser: 3,
      photo:
        'https://img.pngio.com/png-avatar-108-images-in-collection-page-3-png-avatar-300_300.png',
      comment:
        'Turpis dictum fringilla et neque vitae quisque, condimentum tincidunt nec arcu dapibus class eu, molestie risus id sit faucibus. vestibulum odio ad vehicula donec netus posuere urna donec class,',
      stars: 2,
    },
  },
  {
    id: 3,
    name: 'Generic Shoes',
    description:
      'Lorem ipsum ultricies eleifend sapien tristique ut eros, sapien aliquam velit venenatis ut potenti. habitasse senectus elit vestibulum aliquam cras pulvinar platea mauris euismod ligula accumsan, convallis sem metus rhoncus viverra augue gravida accumsan ultricies primis, cursus dapibus faucibus adipiscing nulla lectus sodales risus ut integer. accumsan dui potenti torquent dictum duis diam nisl, quam non platea nam massa porta, enim aenean cursus curae sociosqu condimentum. integer nostra id diam ultricies lectus mi proin, sodales nunc vel porta mattis ut ullamcorper aliquam, suscipit porttitor elit quis consequat pharetra. porta lacus curabitur diam tristique malesuada congue torquent nisi lectus, egestas et mi tellus praesent neque augue rutrum, enim posuere vitae aenean ultricies inceptos ut pulvinar.',
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
      photo:
        'https://img.pngio.com/png-avatar-108-images-in-collection-page-3-png-avatar-300_300.png',
      comment:
        'Turpis dictum fringilla et neque vitae quisque, condimentum tincidunt nec arcu dapibus class eu, molestie risus id sit faucibus. vestibulum odio ad vehicula donec netus posuere urna donec class,',
      stars: 3,
    },
  },
  {
    id: 11,
    name: 'T-Short',
    description:
      'Lorem ipsum ultricies eleifend sapien tristique ut eros, sapien aliquam velit venenatis ut potenti. habitasse senectus elit vestibulum aliquam cras pulvinar platea mauris euismod ligula accumsan, convallis sem metus rhoncus viverra augue gravida accumsan ultricies primis, cursus dapibus faucibus adipiscing nulla lectus sodales risus ut integer. accumsan dui potenti torquent dictum duis diam nisl, quam non platea nam massa porta, enim aenean cursus curae sociosqu condimentum. integer nostra id diam ultricies lectus mi proin, sodales nunc vel porta mattis ut ullamcorper aliquam, suscipit porttitor elit quis consequat pharetra. porta lacus curabitur diam tristique malesuada congue torquent nisi lectus, egestas et mi tellus praesent neque augue rutrum, enim posuere vitae aenean ultricies inceptos ut pulvinar.',
    category: 'T-Shirt',
    price: 59.90,
    descont: 11,
    image: [
      'https://taco.vteximg.com.br/arquivos/ids/332477-1001-1501/18592_C002_1-T-SHIRT-BASICA-COMFORT-INFANTIL-MASCULINO.jpg?v=636927667397330000',
      'https://taco.vteximg.com.br/arquivos/ids/332477-1001-1501/18592_C002_1-T-SHIRT-BASICA-COMFORT-INFANTIL-MASCULINO.jpg?v=636927667397330000',
      'https://taco.vteximg.com.br/arquivos/ids/332477-1001-1501/18592_C002_1-T-SHIRT-BASICA-COMFORT-INFANTIL-MASCULINO.jpg?v=636927667397330000',
    ],
    size: [50, 60, 70, 80],
    colors: ['blue', 'white', 'gray', 'red'],
    stars: 5,
    lastReview: {},
  },
  {
    id: 22,
    name: 'Pantufas',
    description:
      'Lorem ipsum ultricies eleifend sapien tristique ut eros, sapien aliquam velit venenatis ut potenti. habitasse senectus elit vestibulum aliquam cras pulvinar platea mauris euismod ligula accumsan, convallis sem metus rhoncus viverra augue gravida accumsan ultricies primis, cursus dapibus faucibus adipiscing nulla lectus sodales risus ut integer. accumsan dui potenti torquent dictum duis diam nisl, quam non platea nam massa porta, enim aenean cursus curae sociosqu condimentum. integer nostra id diam ultricies lectus mi proin, sodales nunc vel porta mattis ut ullamcorper aliquam, suscipit porttitor elit quis consequat pharetra. porta lacus curabitur diam tristique malesuada congue torquent nisi lectus, egestas et mi tellus praesent neque augue rutrum, enim posuere vitae aenean ultricies inceptos ut pulvinar.',
    category: 'Shoes',
    price: 39.00,
    descont: 17,
    image: [
      'https://www.pantufas.com.br/arquivos/categorias_pantufas3d.png?v=636979505582000000',
      'https://www.pantufas.com.br/arquivos/categorias_pantufas3d.png?v=636979505582000000',
      'https://www.pantufas.com.br/arquivos/categorias_pantufas3d.png?v=636979505582000000',
    ],
    size: [5, 8, 10],
    colors: ['blue', 'yellow', 'gray', 'red'],
    stars: 2,
    lastReview: {
      idUser: 3,
      photo:
        'https://img.pngio.com/png-avatar-108-images-in-collection-page-3-png-avatar-300_300.png',
      comment:
        'Turpis dictum fringilla et neque vitae quisque, condimentum tincidunt nec arcu dapibus class eu, molestie risus id sit faucibus. vestibulum odio ad vehicula donec netus posuere urna donec class,',
      stars: 2,
    },
  },
  {
    id: 93,
    name: 'Generic Shoes',
    description:
      'Lorem ipsum ultricies eleifend sapien tristique ut eros, sapien aliquam velit venenatis ut potenti. habitasse senectus elit vestibulum aliquam cras pulvinar platea mauris euismod ligula accumsan, convallis sem metus rhoncus viverra augue gravida accumsan ultricies primis, cursus dapibus faucibus adipiscing nulla lectus sodales risus ut integer. accumsan dui potenti torquent dictum duis diam nisl, quam non platea nam massa porta, enim aenean cursus curae sociosqu condimentum. integer nostra id diam ultricies lectus mi proin, sodales nunc vel porta mattis ut ullamcorper aliquam, suscipit porttitor elit quis consequat pharetra. porta lacus curabitur diam tristique malesuada congue torquent nisi lectus, egestas et mi tellus praesent neque augue rutrum, enim posuere vitae aenean ultricies inceptos ut pulvinar.',
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
      photo:
        'https://img.pngio.com/png-avatar-108-images-in-collection-page-3-png-avatar-300_300.png',
      comment:
        'Turpis dictum fringilla et neque vitae quisque, condimentum tincidunt nec arcu dapibus class eu, molestie risus id sit faucibus. vestibulum odio ad vehicula donec netus posuere urna donec class,',
      stars: 3,
    },
  },
];

function Cart() {

  const [products, setProducts] = useState([]);
  const navigation = useNavigation();

  function navigateToProducts(product) {
    navigation.navigate('Product', product);
  }

  function renderProduct({ item }) {
    return (
      <ProductContainer
        onPress={() => navigateToProducts(item)}
        activeOpacity={0.9}>
        <ImageProduct
          style={{ height: 70, width: 70 }}
          source={{ uri: item.image[0] }}
        />
        <ContainerNameAndPrice>
          <TextCategory>{item.name}</TextCategory>
          <TextCategory> R$ {item.price}</TextCategory>
        </ContainerNameAndPrice>

        <ContainerQuantity>
          <TouchableOpacity onPress={() => alert('Minus')}>
            <Icon name="plus" size={24} color="#7159c1" />
          </TouchableOpacity>
          <Quantity editable={false}>1</Quantity>
          <TouchableOpacity onPress={() => alert('Plus')}>
            <Icon name="minus" size={24} color="#7159c1" />
          </TouchableOpacity>

        </ContainerQuantity>

      </ProductContainer>
    );
  }

  useEffect(() => {
    setProducts(dataProductsSearchExample);
  }, []);

  return (
    <Container>
      <Header>
        <TitleHeader>Your Cart</TitleHeader>
        <Icon name="shopping-cart" size={20} color="#7159c2" />
      </Header>

      {products.length <= 0 && <Text>Do you not have product into cart</Text>}
      <ContainerFlatList>
        <FlatList
          data={products}
          renderItem={renderProduct}
          keyExtractor={(item) => item.toString()}
        />
      </ContainerFlatList>

      <ContainerInfoOrder>
        <ContainerInfo>
          <TextCategory>Itens ({products.length})</TextCategory>
          <TextCategory>$ {1579} </TextCategory>
        </ContainerInfo>
        <ContainerInfo>
          <TextCategory>Shipping</TextCategory>
          <TextCategory>$ {40} </TextCategory>
        </ContainerInfo>
        <ContainerInfo>
          <TextCategory>Import changes</TextCategory>
          <TextCategory>$ {100} </TextCategory>
        </ContainerInfo>
      </ContainerInfoOrder>

    </Container>
  );
}

export default Cart;
