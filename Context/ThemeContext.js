import React,{useState,useContext} from 'react';


export const ThemeContext = React.createContext();



const ThemeProvider = ({children}) => {

	const [isDark,setIsDark] = useState(true);

   return(

      <ThemeContext.Provider value = {{ isDark,setIsDark }}>
         {children}
      </ThemeContext.Provider>

   	)

}

export default ThemeProvider;