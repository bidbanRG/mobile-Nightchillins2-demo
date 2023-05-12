import React,{useLayoutEffect,useEffect,useState} from 'react'
import { StyleSheet, Text, View, StatusBar} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from "@react-navigation/native"
import { ThemeContext} from '../Context/ThemeContext';
import styled from 'styled-components';
import Header from './Header'
import Feed from './Feed';
import Stories from './Stories';
const Home = () => {

  const {isDark} = React.useContext(ThemeContext);
  const IsLightTheme = isDark;
  
  const navigation = useNavigation();
    
    useLayoutEffect(() => {
        navigation.setOptions({
         headerShown:false,
      });
    },[]);

    
      
    
  

	return (
		<SafeAreaView style = { {...styles.header, backgroundColor:`${IsLightTheme ? 'whitesmoke' : '#242124' }`}}>
         <StatusBar style = 'dark'/>
          <Header/>
			    <Feed/>
         <Stories/>
     </SafeAreaView>
	)
}

const styles = StyleSheet.create({
   header: {
    
    height:'100%',
    display:'flex',
    width:'100%',
   

  },
});

export default Home

