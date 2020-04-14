import React, { useState } from 'react';
import { View, Text, ImageBackground, FlatList, SafeAreaView, TouchableOpacity, Alert, Image } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  Container,
  SearchInput,
  Header,
  IconMargin,
  ContainerSliders,
  ContainerImageSlider,
  TitleSlide,
  SubTitleSlide,
  ContainerBackgroundImage,
  ContainerCategoria,
  TitleCategory,
  SubTitleCategory,
  HeaderCategory,
  CategoryButton,
  ContainerIconCategory,
  TextCategory,
  ProductContainer,
  ContainerSale,
  ImageProduct
} from './style';

const data = [
  { id: 2, title: 'Hello1', description: 'usaduhsahusaduhuhasduhhausuhsaduhsdauhasd', image: "https://png.pngtree.com/thumb_back/fw800/background/20190215/pngtree-blue-pure-color-simple-background-image_3724.jpg" },
  { id: 4, title: 'Hello2', description: 'ASKDAS', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTTah2GGpiEWqBoLPGbjojgQrYgRHzRaqHWhAJwW7a1-rnih-fa&usqp=CAU" },
  { id: 5, title: 'Hello3', description: 'asdkasjd', image: "https://c4.wallpaperflare.com/wallpaper/829/213/283/red-color-simple-background-minimalism-buildings-black-art-wallpaper-preview.jpg" },
  { id: 6, title: 'Hello3', description: 'asdkasjd', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSBStLqMv5fIirCzb3ufL9eauqY7pYp6Pat0L_2pDxavVcvvPmy&usqp=CAU" },
];

const dataCategory = [
  {
    id: 1,
    title: "T-shirts",
    nameIcon: "percent"
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

const dataProductsFlashSale = [
  { id: 1, name: "Shoes", price: 170.32, image: "https://d129q82p91aw7f.cloudfront.net/df2f90248bb2/tenis-dc-shoes-heathrow-imp-feminino-feminino.200x200.jpg" },
  { id: 2, name: "T-Shirt", price: 50.99, image: "https://www.harlandclarkepromo.com/images/shared/catalog200x200/APPAREL1493819134/800_ebdcc9_p1-200x200.jpg" },
  { id: 3, name: "PlayStation 4", price: 1999.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTkCgUZSRerRIwnBIy_ZaDC_MDrblpVlDK64WQk27mcFiTR8LHX&usqp=CAU" },
  { id: 4, name: "Computador gamer", price: 1500, image: "https://im.promobit.com.br/596936167515656316373820387704.jpg" },
  { id: 5, name: "Pelucia", price: 10.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSTXks0DE_KJG13MJ1fa2XoZ-tnLKtUlIUy_5fojcRaadkhsxwp&usqp=CAU" },
  { id: 6, name: "Armario", price: 599, image: "https://img.ijacotei.com.br/produtos/200/200/59/10/13991059.jpg" },
]

const dataProductsMegaSale = [
  { id: 3, name: "PlayStation 4", price: 1999.00, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTkCgUZSRerRIwnBIy_ZaDC_MDrblpVlDK64WQk27mcFiTR8LHX&usqp=CAU" },
  { id: 4, name: "Computador gamer", price: 1500, image: "https://im.promobit.com.br/596936167515656316373820387704.jpg" },
  { id: 6, name: "Armario", price: 599, image: "https://img.ijacotei.com.br/produtos/200/200/59/10/13991059.jpg" },
  { id: 1, name: "Shoes", price: 170.32, image: "https://d129q82p91aw7f.cloudfront.net/df2f90248bb2/tenis-dc-shoes-heathrow-imp-feminino-feminino.200x200.jpg" },
  { id: 5, name: "Pelucia", price: 10.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSTXks0DE_KJG13MJ1fa2XoZ-tnLKtUlIUy_5fojcRaadkhsxwp&usqp=CAU" },
  { id: 2, name: "T-Shirt", price: 50.99, image: "https://www.harlandclarkepromo.com/images/shared/catalog200x200/APPAREL1493819134/800_ebdcc9_p1-200x200.jpg" },
]

function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const widthDevice = Dimensions.get('screen').width;

  function _renderItem({ item, index }) {
    return (
      <ContainerImageSlider onPress={() => alert(item.title)} activeOpacity={1}>
        <ContainerBackgroundImage source={{ uri: item.image }}>
          <TitleSlide>{item.title}</TitleSlide>
          <SubTitleSlide>{item.description}</SubTitleSlide>
        </ContainerBackgroundImage>
      </ContainerImageSlider>
    );
  }

  function renderCategory({ item }) {
    return (
      <CategoryButton onPress={() => alert(item.nameIcon)}>
        <ContainerIconCategory>
          <Icon name={item.nameIcon} size={18} color="#e02041" />
        </ContainerIconCategory>
        <TextCategory>{item.nameIcon}</TextCategory>
      </CategoryButton>
    )
  }

  function renderProduct({ item }) {
    return (
      <ProductContainer onPress={() => alert(item.name)}>
        <ImageProduct style={{ height: 70, width: 70 }} source={{ uri: item.image }} />
        <TextCategory>{item.name}</TextCategory>
        <TextCategory>R$ {(item.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</TextCategory>
      </ProductContainer>
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
        <TouchableOpacity onPress={() => alert('Click heart')}>
          <IconMargin name="heart" size={24} color="#ddd" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('Click bell')}>
          <IconMargin name="bell" size={24} color="#ddd" />
        </TouchableOpacity>
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
          <TouchableOpacity onPress={() => alert('More category')} activeOpacity={0.8}>
            <SubTitleCategory>More Category</SubTitleCategory>
          </TouchableOpacity>
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


      <ContainerSale>
        <HeaderCategory>
          <TitleCategory>Flash Sale</TitleCategory>
          <TouchableOpacity onPress={() => alert('See more flash sale')} activeOpacity={0.8}>
            <SubTitleCategory>See more</SubTitleCategory>
          </TouchableOpacity>
        </HeaderCategory>

        <SafeAreaView>
          <FlatList
            data={dataProductsFlashSale}
            renderItem={renderProduct}
            keyExtractor={item => item.id}
            horizontal={true}
          />
        </SafeAreaView>
      </ContainerSale>

      <ContainerSale>
        <HeaderCategory>
          <TitleCategory>Mega Sale</TitleCategory>
          <TouchableOpacity onPress={() => alert('See more mega sale')} activeOpacity={0.8}>
            <SubTitleCategory>See more</SubTitleCategory>
          </TouchableOpacity>
        </HeaderCategory>

        <SafeAreaView>
          <FlatList
            data={dataProductsMegaSale}
            renderItem={renderProduct}
            keyExtractor={item => item.id}
            horizontal={true}
          />
        </SafeAreaView>
      </ContainerSale>

    </Container>
  );
}

export default Home;
