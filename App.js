import React from "react";
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator}  from '@react-navigation/native-stack';
import { SafeAreaView,StyleSheet,Text,View } from "react-native";
import SignInScreen from "./src/screens/SigninScreen/SignInScreen";
import RegisterScreen from "./src/screens/RegisterScreen/RegisterScreen";
import Navigation from "./src/navigation/Navigation";



const App = () =>{
  

  return (
        <NavigationContainer styles = {styles.root}>

          <Navigation/>
        
        </NavigationContainer>
        
      
 
        
      
   
    
  );

};

const styles = StyleSheet.create({
  root: {
    flex:1,
    backgroundColor:"F4F4F2",
  },
});



export default App;










