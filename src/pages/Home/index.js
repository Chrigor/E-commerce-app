import React, { useState } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import BackgroundImage from '../../assets/back.jpg';
import { Dimensions } from 'react-native';

import {
  Container,
  SearchInput,
  Header,
  IconMargin,
  ContainerSliders,
} from './style';


const data = [{ title: 'Hello1' }, { title: 'Hello2' }, { title: 'Hello3' }];



function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const widthDevice = Dimensions.get('screen').width;

  function _renderItem({ item, index }) {
    return (
      <View style={{ flex: 1, backgroundColor: 'red' }}>
        <ImageBackground source={BackgroundImage} style={{ flex: 1 }}>
          <Text>{item.title}</Text>
        </ImageBackground>
      </View>
    );
  }

  return (
    <Container>
      <Header>
        <SearchInput
          inlineImageLeft="icon"
          inlineImagePadding={25}
          placeholder="Search Product"
        />
        <IconMargin name="heart" size={24} color="#eee" />
        <IconMargin name="bell" size={24} color="#eee" />
      </Header>

      <ContainerSliders>

        <Carousel
          ref={(c) => {
            _carousel = c;
          }}
          layout={'stack'}
          data={data}
          renderItem={_renderItem}
          sliderWidth={widthDevice}
          itemWidth={widthDevice}
          onSnapToItem={(index) => setActiveSlide(index)}
          loop={true}
          loopClonesPerSide={2}
          autoplay={true}
          autoplayDelay={500}
          autoplayInterval={3000}
        />

        <Pagination
          dotsLength={data.length}
          activeDotIndex={activeSlide}
          containerStyle={{ backgroundColor: '#333', paddingVertical: 5, width: widthDevice }}
          dotStyle={{
            width: 5,
            height: 5,
            borderRadius: 5,
            marginHorizontal: 8,
            backgroundColor: 'rgba(255, 255, 255, 0.92)',
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </ContainerSliders>

    </Container>
  );
}

export default Home;
