import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';

export const Container = styled.ScrollView`
    flex:1;
    background-color:rgba(255,255,255,0.7);
    padding: 15px 10px;
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
`

export const IconMargin = styled(Icon)`
    margin-left:12px;
`

export const ContainerSliders = styled.View`
    height: 250px;
    width: 100%;
    border: none;
`

export const ContainerImageSlider = styled.TouchableOpacity`
    flex:1;
    min-height: 200px;
    margin:10px 0px;
`

export const ContainerBackgroundImage = styled.ImageBackground`
    flex: 1;
    justify-content: center;
    align-items: center;
`

export const TitleSlide = styled.Text`
    font-size: 20px;
    color: #fff;
`

export const SubTitleSlide = styled.Text`
    font-size: 15px;
    width: 200px;
    color: #fff;
`

export const ContainerCategoria = styled.View`
    display:flex;
    height:150px;
    width: 100%;
    margin-top:10px;
`

export const TitleCategory = styled.Text`
    font-size: 20px;
    font-weight: bold;
    padding-left: 15px;
`
export const SubTitleCategory = styled.Text`
    font-size: 17px;
    font-weight: bold;
    color:#e02041;
    padding-right: 15px;
`

export const HeaderCategory = styled.View`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    width: 100%;
    margin-bottom:10px;
`

export const CategoryButton = styled.TouchableOpacity`
    flex:1;
    flex-direction: column;
    justify-content: center; 
    align-items: center;
    height: 100px;
`

export const ContainerIconCategory = styled.View`
    flex:1;
    border: 1px solid #eee;
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

export const ProductContainer = styled.TouchableOpacity`
    flex:1;
    flex-direction: column;
    justify-content: center; 
    align-items: center;
    height: 170px;
    width: 115px;
    margin-left: 15px;
    border: 1px solid #eee;
    padding-bottom:15px;
`

export const TextDescont = styled.Text`
    color:red;
    font-size:12px;
    padding-bottom:5px;
`

export const ContainerSale = styled.View`
    width: 100%;
    margin-bottom: 10px;
    padding-top: 5px;
    padding-bottom: 10px;
`

export const ImageProduct = styled.Image`
    height: 70px;
    width: 70px;
`
