import React from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

function Notifications() {

    const route = useRoute();

    console.log(route.params);

    return (
        <View>
            <Text>
                Notifications
            </Text>
        </View>
    );
}

export default Notifications;