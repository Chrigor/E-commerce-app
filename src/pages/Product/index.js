import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {Dimensions} from 'react-native';
import {
  Container,
  ContainerSliders,
  ContainerImageSlider,
  ContainerBackgroundImage,
} from './style';

import Carousel, {Pagination} from 'react-native-snap-carousel';

function Product() {
  const route = useRoute();
  const product = route.params;
  const {image} = product;

  const [activeSlide, setActiveSlide] = useState(0);
  const widthDevice = Dimensions.get('screen').width;

  function _renderItem({item, index}) {
    console.log(String(item));

    return (
      <ContainerImageSlider>
        <ContainerBackgroundImage source={{uri: String(item)}} />
      </ContainerImageSlider>
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
    </Container>
  );
}

export default Product;
