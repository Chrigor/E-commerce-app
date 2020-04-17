import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, FlatList} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import {Container, ProductContainer, ImageProduct, TextCategory} from './style';

function Products() {
  const route = useRoute();
  const data = route.params;
  const [products, setProducts] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    setProducts(data);
  }, []);

  function navigateToProducts(product) {
    navigation.navigate('Product', product);
  }

  function renderProduct({item}) {
    return (
      <ProductContainer
        onPress={() => navigateToProducts(item)}
        activeOpacity={0.9}>
        <ImageProduct
          style={{height: 70, width: 70}}
          source={{uri: item.image[0]}}
        />
        <TextCategory>{item.name}</TextCategory>
        <TextCategory>
          R${' '}
          {String(item.price).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </TextCategory>
      </ProductContainer>
    );
  }

  return (
    <Container>
      <SafeAreaView>
        <FlatList
          data={products}
          renderItem={renderProduct}
          keyExtractor={(item) => item.toString()}
          horizontal={false}
          numColumns={2} // Número de colunas
        />
      </SafeAreaView>
    </Container>
  );
}

export default Products;
