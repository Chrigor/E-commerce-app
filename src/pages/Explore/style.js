import styled from 'styled-components';

import { Dimensions } from 'react-native';
const widthDevice = Dimensions.get('window').width;
const heightDevice = Dimensions.get('window').height;

export const Container = styled.SafeAreaView`
    flex:1;
    background-color:rgba(255,255,255,0.7);
    padding: 1px 10px;
`

export const SearchInput = styled.TextInput`
    flex:1;
    height: 42px;
    border: 1px solid #EBF0FF;
    padding: 5px 7px;
`

export const Header = styled.View`
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-around;
    padding: 0px 0px 10px 0px ;
    margin-top: 20px;
`

export const IconHeader = styled.TouchableOpacity`
    margin:2px 15px;
    padding: 2px;
`

export const ProductContainer = styled.TouchableOpacity`
    flex-direction: column;
    justify-content: center; 
    align-items: center;
    height: ${heightDevice / 3.5}px;
    width: ${widthDevice / 2.5}px;
    margin-left: 7px;
    border: 1px solid #eee;
    padding-bottom:5px;
    margin-bottom: 10px;
`

export const ImageProduct = styled.Image`
    height: 70px;
    width: 70px;
`

export const TextCategory = styled.Text`
    font-size: 12px;
    height: 20px;
    margin: 5px;
`

export const ContainerFlatList = styled.SafeAreaView`
    flex:1;
    width:100%;
    align-items:center;
`