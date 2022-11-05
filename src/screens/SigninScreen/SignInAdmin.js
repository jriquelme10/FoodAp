import React,{useState}from "react";
import {View, Text, Image,StyleSheet, useWindowDimensions} from 'react-native';
import Logo from '../../../assets/images/logo.png';
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigation } from "@react-navigation/native";


const SignInAdminScreen = () => {
    const {username,setUsername} = useState('');
    const {password,setPassword} = useState('');
    const {height} = useWindowDimensions();
    const navigatioon = useNavigation();
    const onSignInPressed = () => {
     console.warn('Iniciar Sesion'); 
      
    }
    const onForgotPasswordPressed = () => {
        console.warn('Olvidaste la contraseña');   
       }
    const   onClientPressed = () => {
        navigatioon.navigate("ClientTable");
    }
return (
    <View style = {styles.root}>
        <Image source = {Logo}
         style = {[styles.logo,{ height:height * 0.3}]}
         resizeMode = "contain"
         />
         <CustomInput 
         placeholder="Username del administrador" 
         value = {username}
         setValue = {setUsername}
         />
         <CustomInput
          placeholder="Password del administrador" 
          value = {password} 
          setValue = {setPassword}
          secureTextEntry = {true}
          />

          <CustomButton 
          text="Iniciar Sesión"
           onPress={onSignInPressed}
           />
          <CustomButton 
          text="Olvidaste la contraseña?"
           onPress={onForgotPasswordPressed}
           type ="TERTIARY"
           />
           <CustomButton 
          text="No eres administrador?, inicia aquí."
           onPress={onClientPressed}
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
    
    logo: {
        width:"100%",
        maxWidth: 200,
        height:70,
    },

});

export default SignInAdminScreen;