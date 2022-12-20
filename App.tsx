import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { Navigator } from './src/navigator/Navigator';



const App = () => {
  return (
    <NavigationContainer>
     <Navigator/>
    </NavigationContainer>
 )
};
export default App;
