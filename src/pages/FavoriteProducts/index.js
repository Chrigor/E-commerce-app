import React from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

function FavoriteProducts() {

    const route = useRoute();

    console.log(route.params);

    return (
        <View>
            <Text>
                FavoriteProducts
            </Text>
        </View>
    );
}

export default FavoriteProducts;