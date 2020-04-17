import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
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
    ContainerStars
} from './style';

import Carousel, { Pagination } from 'react-native-snap-carousel';

function Product() {
    const route = useRoute();
    const product = route.params;

    const { image } = product;
    const quantidadeStarts = product.stars;

    const [activeSlide, setActiveSlide] = useState(0);
    const [colorFavorite, setColorFavorite] = useState("#ccc");

    const widthDevice = Dimensions.get('screen').width;

    function _renderItem({ item, index }) {
        return (
            <ContainerImageSlider>
                <ContainerBackgroundImage source={{ uri: String(item) }} />
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



            <ContainerTitleProduct>
                <TitleSlide> {product.name}</TitleSlide>
                <TouchableOpacity onPress={() => setColorFavorite(colorFavorite === "#ccc" ? "red" : "#ccc")} activeOpacity={0.9}>
                    <Icon name="heart" color={colorFavorite} size={24} />
                </TouchableOpacity>
            </ContainerTitleProduct>

            <ContainerStars>
                {
                    [1, 2, 3, 4, 5].map((e, i) => {
                        return (
                            <Icon name="star" color={i+1 <= quantidadeStarts? "#FEDE00" : "#ddd"} size={24} />
                        )
                    })
                }
            </ContainerStars>

        </Container>
    );
}

export default Product;
