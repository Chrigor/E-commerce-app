import React from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

function Products() {

    const route = useRoute();
    console.log('--------------');
    const name = (route.params.name);

    return (
        <View>
            <Text>
                Product: {name}
            </Text>
        </View>
    );
}

export default Products;