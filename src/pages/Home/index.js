import React, { useState } from 'react';
import { View, Text, ImageBackground, FlatList, SafeAreaView } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import BackgroundImage from '../../assets/back.jpg';
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

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
  { id: 2, title: 'Hello1', description: 'usaduhsahusaduhuhasduhhausuhsaduhsdauhasd' },
  { id: 4, title: 'Hello2', description: 'ASKDAS' },
  { id: 5, title: 'Hello3', description: 'asdkasjd' },
  { id: 6, title: 'Hello3', description: 'asdkasjd' },
];

const dataCategory = [
  {
    id: 1,
    title: "T-shirts",
    nameIcon: "home"
  },
  {
    id: 2,
    title: "T-shirts",
    nameIcon: "rocket"
  },
  {
    id: 3,
    title: "T-shirts",
    nameIcon: "adn"
  },
  {
    id: 4,
    title: "T-shirts",
    nameIcon: "amazon"
  },
  {
    id: 5,
    title: "T-shirts",
    nameIcon: "home"
  },
  {
    id: 6,
    title: "T-shirts",
    nameIcon: "ambulance"
  },
  {
    id: 7,
    title: "T-shirts",
    nameIcon: "at"
  },
  {
    id: 8,
    title: "T-shirts",
    nameIcon: "android"
  },
]

function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const widthDevice = Dimensions.get('screen').width;

  function _renderItem({ item, index }) {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground source={BackgroundImage} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 20, color: '#fff' }}>{item.title}</Text>
          <Text style={{ fontSize: 15, width: 200 }}>{item.description}</Text>
        </ImageBackground>
      </View>
    );
  }

  function renderCategory({ item }) {
    return (
      <View style={{flexDirection:"column", justifyContent: "center", alignItems:"center", height: 100}}>
        <View style={{ flex: 1, backgroundColor: "#eee", borderRadius: 80, height: 70, width: 70, marginHorizontal: 10, padding: 5, justifyContent: "center", alignItems: "center" }}>
          <Icon name={item.nameIcon} size={18} color="#e02041" />
        </View>
        <Text style={{ fontSize: 12, height: 20, margin:5 }}>{item.nameIcon}</Text>
      </View>
    )
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

        <SafeAreaView>
          <FlatList
            data={dataCategory}
            renderItem={renderCategory}
            keyExtractor={item => item.id}
            horizontal={true}
          />
        </SafeAreaView>

      </ContainerCategoria>
    </Container>
  );
}

export default Home;
