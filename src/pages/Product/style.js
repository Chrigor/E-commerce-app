import styled from 'styled-components';

export const Container = styled.ScrollView`
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

export const CategoryButton = styled.TouchableOpacity`
    flex:1;
    flex-direction: column;
    justify-content: center; 
    align-items: center;
    height: 70px;
    margin: 5px 0px;
`

export const ContainerSize = styled.View`
    flex:1;
    border: 1px solid #ddd;
    border-radius: 80px;
    height: 70px;
    width: 70px;
    margin: 0px 10px;
    padding: 5px; 
    justify-content: center; 
    align-items:center;
`
export const TextCategory = styled.Text`
    font-size: 12px;
    height: 20px;
    margin: 5px;
`

export const ContainerStars = styled.View`
    height: 40px;
    width: 100%;
    flex-direction:row;
`

export const ContainerSpecificProduct = styled.View`
    flex:1;
    width:100%;
    min-height: 100px;
`

export const TextSelect = styled.Text`
    font-size: 18px;
    font-weight:bold;
    padding-bottom: 8px;
    margin: 10px 0px;
`

export const ContainerColor = styled.View`
    flex:1;
    background-color: ${props => props.color};
    border: 1px solid ${props => props.color};
    border-radius: 80px;
    height: 70px;
    width: 70px;
    margin: 0px 10px;
    padding: 5px; 
    justify-content: center; 
    align-items:center;
`