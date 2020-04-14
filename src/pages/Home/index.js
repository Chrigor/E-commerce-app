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
  ContainerCategoria,
  TitleCategory,
  SubTitleCategory,
  HeaderCategory
} from './style';

const data = [
  { title: 'Hello1', description: 'usaduhsahusaduhuhasduhhausuhsaduhsdauhasd' },
  { title: 'Hello2', description: 'ASKDAS' },
  { title: 'Hello3', description: 'asdkasjd' },
];

function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const widthDevice = Dimensions.get('screen').width;

  function _renderItem({ item, index }) {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground source={BackgroundImage} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 20, color:'#fff' }}>{item.title}</Text>
          <Text style={{ fontSize: 15, width: 200 }}>{item.description}</Text>
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
          containerStyle={{
            backgroundColor: '#fff',
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

      <ContainerCategoria>
          
          <HeaderCategory>
            <TitleCategory>Category</TitleCategory>
            <SubTitleCategory>More Category</SubTitleCategory>
          </HeaderCategory>


      </ContainerCategoria>
    </Container>
  );
}

export default Home;
