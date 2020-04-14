import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';

export const Container = styled.View`
    flex:1;
    background-color:#fff;
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