import styled from 'styled-components';
import { Dimensions } from 'react-native';
const widthDevice = Dimensions.get('window').width;
const heightDevice = Dimensions.get('window').height;

export const Container = styled.View`
    flex:1;
    background-color:rgba(255,255,255,0.7);
    padding: 15px 10px;
`

export const ContainerFlatList = styled.SafeAreaView`
    flex:1;
    width:100%;
    align-items:center;
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