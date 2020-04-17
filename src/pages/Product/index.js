import React, { useState } from 'react';
import { View, SafeAreaView, TouchableOpacity, FlatList, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useRoute } from '@react-navigation/native';
import { Dimensions } from 'react-native';
import {
  Container,
  ContainerSliders,
  ContainerImageSlider,
  ContainerBackgroundImage,
  TitleSlide,
  ContainerTitleProduct,
  ContainerStars,
  ContainerSpecificProduct,
  CategoryButton,
  ContainerSize,
  TextCategory,
  TextSelect,
  ContainerColor,
  Description,
  ContainerHeaderReview,
  AvatarUser,
  ContainerInfo,
  ContainerReview,
  ButtonAddToCart,
  TextButton
} from './style';

import Carousel, { Pagination } from 'react-native-snap-carousel';

function Product() {
  const route = useRoute();
  const product = route.params;

  const { image, colors, size, lastReview } = product;
  const quantidadeStarts = product.stars;

  const [activeSlide, setActiveSlide] = useState(0);
  const [colorFavorite, setColorFavorite] = useState('#ccc');

  const widthDevice = Dimensions.get('screen').width;

  function _renderItem({ item, index }) {
    return (
      <ContainerImageSlider>
        <ContainerBackgroundImage source={{ uri: String(item) }} />
      </ContainerImageSlider>
    );
  }

  function renderSize({ item: size }) {
    return (
      <CategoryButton onPress={() => alert(size)}>
        <ContainerSize>
          <TextCategory>{size}</TextCategory>
        </ContainerSize>
      </CategoryButton>
    );
  }

  function renderColor({ item: color }) {
    return (
      <CategoryButton onPress={() => alert(color)}>
        <ContainerColor color={color} />
      </CategoryButton>
    );
  }

  return (
    <Container>
      <ContainerSliders>
        <Carousel
          ref={(c) => {
            _carousel = c;
          }}
          layout={'default'}
          data={image}
          renderItem={_renderItem}
          sliderWidth={widthDevice}
          itemWidth={widthDevice}
          onSnapToItem={(index) => setActiveSlide(index)}
        />

        <Pagination
          dotsLength={image.length}
          activeDotIndex={activeSlide}
          containerStyle={{
            backgroundColor: 'rgba(0,0,0,0)',
            paddingVertical: 5,
            width: widthDevice,
          }}
          dotStyle={{
            width: 7,
            height: 7,
            borderRadius: 5,
            marginHorizontal: 8,
            marginVertical: 8,
            backgroundColor: '#e02041',
          }}
          inactiveDotOpacity={0.5}
          inactiveDotScale={0.8}
        />
      </ContainerSliders>

      <ContainerTitleProduct>
        <TitleSlide> {product.name}</TitleSlide>
        <TouchableOpacity
          onPress={() =>
            setColorFavorite(colorFavorite === '#ccc' ? 'red' : '#ccc')
          }
          activeOpacity={0.9}>
          <Icon name="heart" color={colorFavorite} size={26} />
        </TouchableOpacity>
      </ContainerTitleProduct>

      <ContainerStars>
        {[1, 2, 3, 4, 5].map((e, i) => {
          return (
            <Icon
              name="star"
              color={i + 1 <= quantidadeStarts ? '#FEDE00' : '#ddd'}
              size={25}
            />
          );
        })}
      </ContainerStars>

      <ContainerSpecificProduct>
        <TextSelect>Select Size</TextSelect>
        <SafeAreaView>
          <FlatList
            data={size}
            renderItem={renderSize}
            keyExtractor={(item) => (item).toString()}
            horizontal={true}
          />
        </SafeAreaView>

        <TextSelect>Select Color</TextSelect>
        <SafeAreaView>
          <FlatList
            data={colors}
            renderItem={renderColor}
            keyExtractor={(item) => (item).toString()}
            horizontal={true}
          />
        </SafeAreaView>

        <TextSelect>Specification</TextSelect>
        <Description>{product.description}</Description>

        <TextSelect>Last Review Product</TextSelect>
        {lastReview.idUser &&
          <ContainerReview>
            <ContainerHeaderReview>
              <View>
                <AvatarUser source={{ uri: lastReview.photo }} />
              </View>
              <ContainerInfo>
                <TextSelect>{lastReview.idUser}</TextSelect>
                <ContainerStars>
                  {[1, 2, 3, 4, 5].map((e, i) => {
                    return (
                      <Icon
                        name="star"
                        color={i + 1 <= lastReview.stars ? '#FEDE00' : '#ddd'}
                        size={25}
                      />
                    );
                  })}
                </ContainerStars>
              </ContainerInfo>
            </ContainerHeaderReview>

            <Description>{lastReview.comment}</Description>
          </ContainerReview>
        }

        {!lastReview.idUser &&
            <Description>This product not have reviews ;(</Description>
        }

      </ContainerSpecificProduct>

      <ButtonAddToCart activeOpacity={0.9} onPress={() => alert(`Add to cart ${product.id}`)}>
        <TextButton>Add to Cart </TextButton>
      </ButtonAddToCart>

    </Container>
  );
}

export default Product;
