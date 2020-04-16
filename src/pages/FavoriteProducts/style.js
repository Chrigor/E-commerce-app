import styled from 'styled-components';

export const Container = styled.SafeAreaView`
    flex:1;
    background-color:rgba(255,255,255,0.7);
    padding: 1px 10px;
`

export const ContainerProduct = styled.View`
    flex:1;
    height: 130px;
    padding: 2px 5px;
    flex-direction:row;
    justify-content:space-between;
    margin-bottom: 10px;
    border-style: solid; 
    border-bottom-color: #eee; 
    border-bottom-width: 1px;
`

export const ImageProduct = styled.Image`
    flex:1;
    max-width:150px;
    max-height:150px;
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