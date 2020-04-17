import styled from 'styled-components';

export const Container = styled.View`
    flex:1;
    background-color:rgba(255,255,255,0.7);
    padding: 15px 10px;
    align-items:center;
`

export const ProductContainer = styled.TouchableOpacity`
    flex-direction: column;
    justify-content: center; 
    align-items: center;
    height: 220px;
    width: 170px;
    margin-left: 10px;
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