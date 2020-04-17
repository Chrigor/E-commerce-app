import styled from 'styled-components';

export const Container = styled.SafeAreaView`
    flex:1;
    background-color:rgba(255,255,255,0.7);
    padding: 15px 10px;
`

export const ContainerSliders = styled.View`
    height:350px;
    width: 100%;
    border: none;
`

export const ContainerImageSlider = styled.View`
    flex:1;
    min-height: 200px;
    margin:10px 0px;
`

export const TitleSlide = styled.Text`
    font-size: 25px;
    font-weight: bold;
    color: black;
`

export const SubTitleSlide = styled.Text`
    font-size: 15px;
    width: 200px;
    color: #fff;
`

export const ContainerBackgroundImage = styled.ImageBackground`
    flex: 1;
    justify-content: center;
    align-items: center;
`

export const ContainerTitleProduct = styled.View`
    flex:1;
    max-height: 70px;
    width: 100%;
    padding:5px 0px;
    flex-direction: row;
    justify-content: space-between;
    padding-right: 30px;
    align-items:center;
`

export const ContainerStars = styled.View`
    height: 40px;
    width: 100%;
    flex-direction:row;
`