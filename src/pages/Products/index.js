import React from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

function Products() {

    const route = useRoute();

    console.log(route.params);

    return (
        <View>
            <Text>
                Products
            </Text>
        </View>
    );
}

export default Products;