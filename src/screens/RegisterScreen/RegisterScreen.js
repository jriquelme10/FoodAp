import React,{useState}from "react";
import {View, Text, Image,StyleSheet, useWindowDimensions,Button} from 'react-native';
import Logo from '../../../assets/images/logo.png';
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigation } from "@react-navigation/native";


const RegisterScreen = () => {
    const {username,setUsername} = useState('');
    const {email, setEmail} = useState('');
    const {password,setPassword} = useState('');
    const {height} = useWindowDimensions();
    const navigatioon = useNavigation();
    const onRegisterPressed = () => {
     console.warn('Registrarse');   
    }
    const onSignInPressed = () => {
        console.warn('Iniciar sesion');  
        navigatioon.navigate("Iniciar Sesión");
       
       }

return (
    <View style = {styles.root}>
        <Image source = {Logo}
         style = {[styles.logo,{ height:height * 0.3}]}
         resizeMode = "contain"
         />
         <CustomInput 
         placeholder="Username" 
         value = {username}
         setValue = {setUsername}
         />
         <CustomInput 
         placeholder="Email" 
         value = {email}
         setValue = {setEmail}
         />
         <CustomInput
          placeholder="Password" 
          value = {password} 
          setValue = {setPassword}
          secureTextEntry = {true}
          />
          <CustomInput
          placeholder="Reingrese la password" 
          value = {password} 
          setValue = {setPassword}
          secureTextEntry = {true}
          />

          <CustomButton 
          text="Registrarse"
           onPress={onRegisterPressed}
           />
           <CustomButton 
          text="¿Ya tienes una cuenta? Inicia sesión"
           onPress={onSignInPressed}
           type ="TERTIARY"
           />
          
    </View>
);
};


const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding:20,
    },

    title:{
      fontSize:20,
      marginBottom: 10,
      fontWeight:'bold'
    },
    
    logo: {
        width:"100%",
        maxWidth: 200,
        height:70,
    },

});

export default RegisterScreen;