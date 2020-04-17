import React, { useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

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
  ImageProduct,
  TextDescont,
} from './style';

const data = [
  {
    id: 2,
    title: 'Hello1',
    description: 'usaduhsahusaduhuhasduhhausuhsaduhsdauhasd',
    image:
      'https://png.pngtree.com/thumb_back/fw800/background/20190215/pngtree-blue-pure-color-simple-background-image_3724.jpg',
  },
  {
    id: 4,
    title: 'Hello2',
    description: 'ASKDAS',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTTah2GGpiEWqBoLPGbjojgQrYgRHzRaqHWhAJwW7a1-rnih-fa&usqp=CAU',
  },
  {
    id: 5,
    title: 'Hello3',
    description: 'asdkasjd',
    image:
      'https://c4.wallpaperflare.com/wallpaper/829/213/283/red-color-simple-background-minimalism-buildings-black-art-wallpaper-preview.jpg',
  },
  {
    id: 6,
    title: 'Hello4',
    description: 'asdkasjd',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSBStLqMv5fIirCzb3ufL9eauqY7pYp6Pat0L_2pDxavVcvvPmy&usqp=CAU',
  },
];

const dataCategory = [
  {
    id: 1,
    title: 'T-shirts',
    nameIcon: 'percent',
  },
  {
    id: 2,
    title: 'T-shirts',
    nameIcon: 'rocket',
  },
  {
    id: 3,
    title: 'T-shirts',
    nameIcon: 'adn',
  },
  {
    id: 4,
    title: 'T-shirts',
    nameIcon: 'amazon',
  },
  {
    id: 5,
    title: 'T-shirts',
    nameIcon: 'home',
  },
  {
    id: 6,
    title: 'T-shirts',
    nameIcon: 'ambulance',
  },
  {
    id: 7,
    title: 'T-shirts',
    nameIcon: 'at',
  },
  {
    id: 8,
    title: 'T-shirts',
    nameIcon: 'android',
  },
];

const dataProductsFlashSale = [
  {
    id: 1,
    name: 'Shoes',
    price: 170.32,
    descont: 17,
    image: [
      'https://d129q82p91aw7f.cloudfront.net/df2f90248bb2/tenis-dc-shoes-heathrow-imp-feminino-feminino.200x200.jpg',
      'https://d129q82p91aw7f.cloudfront.net/df2f90248bb2/tenis-dc-shoes-heathrow-imp-feminino-feminino.200x200.jpg',
      'https://d129q82p91aw7f.cloudfront.net/df2f90248bb2/tenis-dc-shoes-heathrow-imp-feminino-feminino.200x200.jpg',
    ],
    stars: 3
  },
  {
    id: 2,
    name: 'Shoes',
    price: 170.32,
    descont: 17,
    image: [
      'https://d129q82p91aw7f.cloudfront.net/df2f90248bb2/tenis-dc-shoes-heathrow-imp-feminino-feminino.200x200.jpg',
      'https://d129q82p91aw7f.cloudfront.net/df2f90248bb2/tenis-dc-shoes-heathrow-imp-feminino-feminino.200x200.jpg',
      'https://d129q82p91aw7f.cloudfront.net/df2f90248bb2/tenis-dc-shoes-heathrow-imp-feminino-feminino.200x200.jpg',
    ],
    stars: 3
  }
];

const dataProductsMegaSale =  [
  {
    id: 1,
    name: 'Shoes',
    price: 170.32,
    descont: 17,
    image: [
      'https://d129q82p91aw7f.cloudfront.net/df2f90248bb2/tenis-dc-shoes-heathrow-imp-feminino-feminino.200x200.jpg',
      'https://d129q82p91aw7f.cloudfront.net/df2f90248bb2/tenis-dc-shoes-heathrow-imp-feminino-feminino.200x200.jpg',
      'https://d129q82p91aw7f.cloudfront.net/df2f90248bb2/tenis-dc-shoes-heathrow-imp-feminino-feminino.200x200.jpg',
    ],
    stars: 4
  },
  {
    id: 2,
    name: 'Shoes',
    price: 170.32,
    descont: 17,
    image: [
      'https://d129q82p91aw7f.cloudfront.net/df2f90248bb2/tenis-dc-shoes-heathrow-imp-feminino-feminino.200x200.jpg',
      'https://d129q82p91aw7f.cloudfront.net/df2f90248bb2/tenis-dc-shoes-heathrow-imp-feminino-feminino.200x200.jpg',
      'https://d129q82p91aw7f.cloudfront.net/df2f90248bb2/tenis-dc-shoes-heathrow-imp-feminino-feminino.200x200.jpg',
    ],
    stars: 5
  }
];

function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const widthDevice = Dimensions.get('screen').width;

  const navigation = useNavigation();

  function navigateToProducts(product) {
    navigation.navigate('Product', product);
  }

  function _renderItem({ item, index }) {
    return (
      <ContainerImageSlider onPress={() => alert(item.title)} activeOpacity={1}>
        <ContainerBackgroundImage source={{ uri: item.image}}>
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
    );
  }

  function renderProduct({ item }) {
    return (
      <ProductContainer onPress={() => navigateToProducts(item)} activeOpacity={0.9}>
        <ImageProduct
          style={{ height: 70, width: 70 }}
          source={{ uri: item.image[0] }}
        />
        <TextCategory>{item.name}</TextCategory>
        <TextCategory>
          R${' '}
          {String(item.price).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </TextCategory>
        <TextDescont>{item.descont}% OFF</TextDescont>
      </ProductContainer>
    );
  }

  return (
    <Container>
      <Header>
        <SearchInput
          inlineImageLeft="search"
          inlineImagePadding={5}
          placeholder="Search Product"
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('FavoriteProducts')}
          activeOpacity={0.8}>
          <IconMargin name="heart" size={24} color="#ddd" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Notifications')}
          activeOpacity={0.8}>
          <IconMargin name="bell" size={24} color="#ddd" />
        </TouchableOpacity>
      </Header>

      <ContainerSliders>
        <Carousel
          ref={(c) => {
            _carousel = c;
          }}
          layout={'default'}
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
          <TouchableOpacity
            onPress={() => alert('More category')}
            activeOpacity={0.8}>
            <SubTitleCategory>More Category</SubTitleCategory>
          </TouchableOpacity>
        </HeaderCategory>

        <SafeAreaView>
          <FlatList
            data={dataCategory}
            renderItem={renderCategory}
            keyExtractor={(item) => item.id}
            horizontal={true}
          />
        </SafeAreaView>
      </ContainerCategoria>

      <ContainerSale>
        <HeaderCategory>
          <TitleCategory>Flash Sale</TitleCategory>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Products', dataProductsFlashSale)
            }
            activeOpacity={0.8}>
            <SubTitleCategory>See more</SubTitleCategory>
          </TouchableOpacity>
        </HeaderCategory>

        <SafeAreaView>
          <FlatList
            data={dataProductsFlashSale}
            renderItem={renderProduct}
            keyExtractor={(item) => item.id}
            horizontal={true}
          />
        </SafeAreaView>
      </ContainerSale>

      <ContainerSale>
        <HeaderCategory>
          <TitleCategory>Mega Sale</TitleCategory>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Products', dataProductsMegaSale)
            }
            activeOpacity={0.8}>
            <SubTitleCategory>See more</SubTitleCategory>
          </TouchableOpacity>
        </HeaderCategory>

        <SafeAreaView>
          <FlatList
            data={dataProductsMegaSale}
            renderItem={renderProduct}
            keyExtractor={(item) => item.id}
            horizontal={true}
          />
        </SafeAreaView>
      </ContainerSale>


      <ContainerImageSlider onPress={() => alert('Products recommend for you')} activeOpacity={0.9}>
        <ContainerBackgroundImage source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQMdwJ6eX2oxYZbGBEUtSv7GJE7fWSy4z77E-P1hCEwn0CNWmdK&usqp=CAU" }}>
          <TitleSlide>Recommended Products</TitleSlide>
          <SubTitleSlide>We recommended the best for you</SubTitleSlide>
        </ContainerBackgroundImage>
      </ContainerImageSlider>

    </Container>
  );
}

export default Home;
