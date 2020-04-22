import styled from 'styled-components';

import { Dimensions } from 'react-native';
const widthDevice = Dimensions.get('window').width;
const heightDevice = Dimensions.get('window').height;

export const Container = styled.SafeAreaView`
    flex:1;
    background-color:rgba(255,255,255,0.7);
    padding: 1px 10px;
`

export const Header = styled.View`
    width: 100%;
    height:70px;
    margin-top: 14px;
    flex-direction:row;
    align-items:center;
`

export const TitleHeader = styled.Text`
    font-size: 24px;
    color:black;
    font-weight:bold;
    margin-right:14px;
`

export const ProductContainer = styled.TouchableOpacity`
    flex-direction: row;
    height: ${heightDevice / 6}px;
    width: 100%;
    border: 1px solid #eee;
    margin-bottom: 10px;
    padding:10px 15px;
    justify-content:space-around;
`

export const ImageProduct = styled.Image`
    height: 100px;
    width: 100px;
    margin-right:20px;
    align-self: center;
`

export const TextCategory = styled.Text`
    font-size: 16px;
    font-weight:bold;
    height: 20px;
    margin: 5px;
`

export const ContainerFlatList = styled.SafeAreaView`
    flex:1;
    width:100%;
`

export const ContainerNameAndPrice = styled.View`
    flex-direction:column;
    align-items:center;
    width: 130px;
`

export const ContainerQuantity = styled.View`
    flex-direction:row;
    align-items:center;
    padding: 5px 15px;
`

export const Quantity = styled.TextInput`
    font-size:10px;
    margin: 0px 10px;
    width: 50px;
    height: 40px;
    background: #eee;
    color:black;
    text-align:center;
`