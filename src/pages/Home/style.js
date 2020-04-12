import styled from 'styled-components';

export const Container = styled.View`
    flex:1;
    background-color:#fff;
    padding: 15px 10px;
`

export const SearchInput = styled.TextInput`
    width: 100%;
    height: 32px;
    border: 1px solid #EBF0FF;
    padding: 5px 7px;
    color: ${props => props.theme.color}

`