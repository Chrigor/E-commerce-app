import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Dimensions } from 'react-native';
const widthDevice = Dimensions.get('window').width;
const heightDevice = Dimensions.get('window').height;

export const Container = styled.SafeAreaView`
    flex:1;
    background-color:rgba(255,255,255,0.7);
    padding: 1px 10px;
`
export const Option = styled.TouchableOpacity`
    flex-direction:row;
    width:100%;
    min-height: 80px;
    align-items:center;
    padding: 5px 20px;

    border-bottom-width:1px;
    border-style: solid; 
    border-bottom-color: #eee; 
    border-bottom-width: 1px;
`
export const Name = styled.Text`
   width: 100px
   font-size: 18px;
   padding: 3px;
   margin-left: 15px;
`
export const Header = styled.Text`
   width: 100%;
   font-size: 26px;
   padding: 20px 10px;
   margin: 5px;
   font-family: sans-serif;
   font-weight:bold;

   border-bottom-width:2px;
   border-style: solid; 
   border-bottom-color: #eee; 
`
export const IconMenu = styled(Icon)`
    width: 40px;
`