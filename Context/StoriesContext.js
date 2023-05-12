import React,{useState,useContext,useEffect} from 'react';
import {URL} from '../RestUrl';
import axios from 'axios';
export const StoriesContext = React.createContext();



const StoriesProvider = ({children}) => {

    const [stories,setStories] = useState(null);
	 
    useEffect(()=>{
      
     const fetchStories = async () => {
      try{
        const { data } = await axios.get(URL + '/stories');
        setStories(data);
      }catch(error){
         console.log(error.message);
      }
   }

      // fetchStories();
     
      
    },[])

   return(

      <StoriesContext.Provider value = {{ stories }}>
         {children}
      </StoriesContext.Provider>

   	)

}



export default StoriesProvider;