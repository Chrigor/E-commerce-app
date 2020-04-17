import styled from 'styled-components';

export const Container = styled.SafeAreaView`
    flex:1;
    background-color:rgba(255,255,255,0.7);
    padding: 15px 10px;
`

export const ContainerNotification = styled.TouchableOpacity`
    flex:1;
    min-height: 120px;
    width: 100%;
    margin: 5px;
    padding: 7px;
    border-style: solid; 
    border-bottom-color: #eee; 
    border-bottom-width: 1px;
`

export const ContainerRow = styled.View`
    flex-direction:row;    
    height:40px;
    align-items:center;
`

export const TitleNotification = styled.Text`
    font-size:18px;
    font-weight: bold;
    justify-content:space-around;
    align-items:center;
    margin-left: 20px;
`

export const DescriptionNotification = styled.Text`
    flex:1;
    text-align: justify;
    padding: 0px 30px;
`