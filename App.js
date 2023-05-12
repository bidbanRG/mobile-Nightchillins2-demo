import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from './Components/Header'
import Home from './Components/Home'
import  ThemeProvider  from './Context/ThemeContext';
import StoriesProvider from './Context/StoriesContext';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
     <StoriesProvider>
     <ThemeProvider>
      <Stack.Navigator>
         <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>

    </ThemeProvider>
   </StoriesProvider>
    </NavigationContainer>

  );
}
  
