import React from 'react'
import { FontAwesome5,MaterialCommunityIcons,Entypo } from '@expo/vector-icons';
import { StyleSheet, Text, View, TextInput,Image} from 'react-native';
import styled from 'styled-components';
import { ThemeContext} from '../Context/ThemeContext';

const Feed = () => {
    
    const { isDark } = React.useContext(ThemeContext);
    const IsLightTheme = isDark;
 
     
   return(
      <FeedView theme = {IsLightTheme}>
        
        <UpperFeed>
            <Avatar source = {require('../assets/avatar.png')}/>
            <Input theme = {IsLightTheme}>
               <Text style = {{fontSize:16,color:'lightgrey'}}> 
                 {"  How's was your day ??"} 
                </Text>
            </Input>
        </UpperFeed>
        
        <LowerFeed>
          
          <LowerIcon>
            <Entypo name="video-camera" size={20} color="crimson" />
            <IconTitle theme = {IsLightTheme}> Live </IconTitle>
          </LowerIcon>
          
          <LowerIcon>  
            <FontAwesome5 name="photo-video" size={20} color="green"/>
            <IconTitle theme = {IsLightTheme}> Photos </IconTitle>
         </LowerIcon>
         
         <LowerIcon>   
           <MaterialCommunityIcons name="play-box-multiple" size={20} color="#CCCC00" />
           <IconTitle theme = {IsLightTheme}> Stories </IconTitle>
         </LowerIcon>
        
        </LowerFeed>
    
     </FeedView>
   )
}

const FeedView = styled.View`
   
   width:95%;
   height:100px;
	border-radius:13px;
	background-color:${props => props.theme === true  ? 'white' : '#1a1110'};
	margin-left:auto;
	margin-right:auto;
	margin-top:17px;
    shadow-color: black;

  shadow-opacity: 1;

  elevation: 9;

`
const UpperFeed = styled.View`
      height:55px;
		display:flex;
    	flex-direction:row;
      align-items:center;
      justify-content:space-around;
`
const Avatar = styled.Image`
        height:41px;
		width:41px;
		border-radius:50px;
		
`
const LowerFeed = styled.View`
   display:flex;
    height:40px;
   justify-content:space-around;
   align-items:center;
   flex-direction:row;

`
const IconTitle = styled.Text`

    color:${props => props.theme === true ? 'black' : 'lightgrey'};
    font-weight:bold;
     margin-left:5px;


`
const LowerIcon = styled.TouchableOpacity`
   flex:0.32;
   justify-content:center;
   align-items:center;
   flex-direction:row;
   
`
const Input = styled.View`
   
	
       width:80%;
       height:35px;
       background-color:black;
       border-radius:14px;
       background-color:${props => props.theme === true  ? 'whitesmoke' : '#1b1b1b'};;
       display:flex;
       justify-content:center
	
`

export default Feed;