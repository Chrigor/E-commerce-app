import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useRoute } from '@react-navigation/native';
import { Container, ContainerNotification, TitleNotification, ContainerRow, DescriptionNotification } from './style';

const notificationsExample = [
    { id: 1, nameIcon:'home' , title: 'Teste Notification', description: 'testge notification, testge notification. testge notification testge notification testge notification' },
    { id: 2, nameIcon:'rocket' ,title: 'Teste Notification', description: 'testge notification, testge notification. testge notification testge notification testge notification' },
    { id: 3, nameIcon:'lock' ,title: 'Teste Notification', description: 'testge notification, testge notification. testge notification testge notification testge notification' },
    { id: 4, nameIcon:'user' ,title: 'Teste Notification', description: 'testge notification, testge notification. testge notification testge notification testge notification' },
    { id: 5, nameIcon:'ambulance' ,title: 'Teste Notification', description: 'testge notification, testge notification. testge notification testge notification testge notification' },
    { id: 6, nameIcon:'bitcoin' ,title: 'Teste Notification', description: 'testge notification, testge notification. testge notification testge notification testge notification' },
]

function Notifications() {

    const route = useRoute();

    const [notificationsUser, setNotificationsUser] = useState([]);


    useEffect(() => {
        setNotificationsUser(notificationsExample);
    }, []);

    function renderNotification({ item }) {
        return (
            <ContainerNotification onPress={() => alert(item.id)}>
                <ContainerRow>
                    <Icon name={item.nameIcon} size={20} color="red" />
                    <TitleNotification>
                        {item.title}
                    </TitleNotification>
                </ContainerRow>

                <DescriptionNotification>{item.description}</DescriptionNotification>
            </ContainerNotification>
        )
    }

    return (
        <Container>
                {notificationsUser.length > 0 && <FlatList
                    data={notificationsExample}
                    renderItem={renderNotification}
                    keyExtractor={(item) => item.id}
                    horizontal={false}
                    showsHorizontalScrollIndicator={false}
                />}
                {
                    notificationsUser.length <= 0 && <Text>You not have notifications</Text>
                }
        </Container>
    );
}

export default Notifications;