import React, { useState } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import BackgroundImage from '../../assets/back.jpg';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Container, SearchInput, Header, IconMargin, ContainerSliders } from './style';

const data = [
  { title: 'Hello1' },
  { title: 'Hello2' },
  { title: 'Hello3' },
]

function Home() {

  const [activeSlide, setActiveSlide] = useState(0);

  function _renderItem({ item, index }) {
    return (
      <View style={{flex:1}}>
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
          inlineImageLeft='icon'
          inlineImagePadding={25}
          placeholder="Search Product"
        />

        <IconMargin name="heart" size={24} color="#eee" />
        <IconMargin name="bell" size={24} color="#eee" />

      </Header>
      <ContainerSliders>
        <Carousel
          ref={(c) => { _carousel = c; }}
          data={data}
          renderItem={_renderItem}
          sliderWidth={372}
          itemWidth={372}
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
          containerStyle={{backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 8,
            backgroundColor: 'rgba(255, 255, 255, 0.92)'
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </ContainerSliders>

    </Container>
  );
}

export default Home;
