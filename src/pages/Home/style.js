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
    background: blue;
`