import styled from 'styled-components';

export const Container = styled.SafeAreaView`
    flex:1;
    background-color:rgba(255,255,255,0.7);
    padding: 1px 10px;
`

export const ContainerProduct = styled.TouchableOpacity`
    flex:1;
    height: 130px;
    padding: 5px;
    flex-direction:row;
    justify-content:space-around;
    margin-bottom: 18px;
    border-style: solid; 
    border-bottom-color: #eee; 
    border-bottom-width: 1px;
`

export const ImageProduct = styled.Image`
    flex:1;
    max-width:100px;
    max-height:100px;
    margin-right: 15px;
`

export const TitleProduct = styled.Text`
    font-size: 18px;
    font-weight:bold;
`
export const DescriptionProduct = styled.Text`
    font-size: 16px;
    font-weight:bold;
`

export const ContainerInfo = styled.View`
    flex-direction:column;
    max-width: 140px;
    align-items:flex-start;
`

export const Description = styled.Text`
    flex:1;
    width: 100%;
    font-size: 15px;
    max-height:auto;
    min-height: 50px;
    padding: 5px 10px; 
    text-align:justify;
    margin:0px 0px 15px 0px;
`