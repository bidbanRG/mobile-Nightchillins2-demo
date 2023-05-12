import React,{useRef,useState,useEffect,useContext,Suspense} from 'react'
import { createResource } from '../api/UserApi';
import { StyleSheet, Text, View, TextInput,FlatList,Pressable,Image,ScrollView} from 'react-native';
import styled from 'styled-components';
import { ThemeContext} from '../Context/ThemeContext';
import { StoriesContext } from '../Context/StoriesContext';
import {Video} from 'expo-av';


const Stories = () => {

	
	
 
	const [play,setPlay] = useState(true);
	const { stories } = useContext(StoriesContext);

     
	if(!stories){
     return(
      <ScrollView 
         horizontal 
        showsHorizontalScrollIndicator = {false}
         >
        
         <VideoLoader/>
         <VideoLoader/>
         <VideoLoader/>
         <VideoLoader/>
         <VideoLoader/>
         <VideoLoader/>
      </ScrollView>

    )
  }
	
   return(
      
      <FlatList
        data={stories}
           renderItem={({ item }) => (
             
                <VideoView {...item}/>
          
            )}
        keyExtractor={item => item._id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />

   )
}



const VideoView = ({PostUrl,Userid}) => {
  
   const personResource = createResource();

    return(

      <View style = {{
        height:170,
        width:95,
        marginTop:30,
        marginLeft:3,
        marginRight:3,
        borderRadius:12,
        backgroundColor:'black',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        position:'relative'
      }}   
    

      >
            <Suspense fallback = { <Text style = {{
            fontSize:20,
            color:'white'
       }}> Loading </Text> }>
          <StoryVideo src = {PostUrl} userId = {Userid} personResource = {personResource}/>
      </Suspense>
      </View>

  )

}

const StoryVideo = ({userId,src,personResource}) => {
  const [muted,setMuted] = useState(true);
 const response = personResource.person.read({_id:userId});
  const { imgUrl } = response[0];
  // const [status,setStatus] = useState();

  


   return(
    <Pressable onPress = {() => setMuted((value) => !value)} 
      style = {{
         height:'95%',
         width:'95%',
         position:'relative'
      }}

    >
      <Video
       
        style={{height:'100%',width:'100%'}}
        source={{
          uri:src
        }}
        shouldPlay
        resizeMode="contain"
        isLooping
        {...{isMuted:muted}}
     // onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <Image
          style={{
           height:30,
           width:30,
           borderRadius:50,
           position:'absolute',
           bottom:5,
           left:10,
           borderColor:'blue',
           borderWidth:2,
         
        }}
        source = {{ uri:imgUrl }}

      />
   </Pressable>
    )

}


const StoryView = styled.View`
   height:500px;
   width:100%;
   background-color:teal;

`


const VideoLoader = () => {

  return(
     <View style = {{
        height:170,
        width:95,
        marginTop:30,
        marginLeft:3,
        marginRight:3,
        borderRadius:12,
        backgroundColor:'black',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        position:'relative'
      }}>

        <Text style = {{color:'white',fontSize:20}}> Loading... </Text>
          <Image
          style={{
           height:30,
           width:30,
           borderRadius:50,
           position:'absolute',
           bottom:5,
           left:10,
           borderColor:'blue',
           borderWidth:2,
         
        }}
        source = {require('../assets/avatar.png')}

      />
     </View>    
   )    

}


export default React.memo(Stories);