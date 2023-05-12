import React, {useContext} from 'react'
import styled from 'styled-components';
import { MaterialIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
import { useFonts, Lobster_400Regular } from '@expo-google-fonts/lobster'
import {  Text, View, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { ThemeContext } from '../Context/ThemeContext';


const Header:React.FC = () => {

    let [loaded,error] = useFonts({Lobster_400Regular});
    const {isDark,setIsDark} = useContext(ThemeContext);
    
    
   
   
	return (
		<HeaderView>
	     { loaded && <HeaderName> NightChillins </HeaderName>}		
		  
		  <Icons> 
          
          <Icon>
            <Ionicons  name="md-search-sharp" size={20} color="black" /> 
          </Icon> 
          
          <Icon >           	
            <MaterialIcons  name="people-alt" size={20} color="black" /> 
         </Icon>
           
           <Icon onPress = {() => setIsDark(!isDark) }>
           { 
              isDark ?
              
              <MaterialIcons name="nights-stay" size={20} color="black" />	
                : 
              <Ionicons name="sunny-sharp" size={20} color="black" />
            }
           </Icon>
           
           <Icon>           	
             <Feather  name="power" size={20} color="black" />           	
           </Icon>
		  
        </Icons>
              
		</HeaderView>
	)
}

const HeaderView = styled.View`
    height:55px;
    display:flex;
    flex-direction:row;
    width:100%;
    align-items: center;
    justify-content:space-around;
`
const HeaderName = styled.Text`
   font-family:Lobster_400Regular;
   font-size:25px;
   color:#ff4081;
`
const Icon = styled.TouchableOpacity`
  height:28px;
  width:28px;
   border-radius:50px;
   display:flex;
   justify-content:center;
   alignItems:center;
   background-color:lightgrey;

`
const Icons = styled.View`
    display:flex;
    flex-direction:row;
    width:45%;
    align-items:center;
    justify-content:space-around;
 `


export default Header

