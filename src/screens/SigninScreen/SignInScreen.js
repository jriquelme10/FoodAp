import React,{useState}from "react";
import {View, Text, Image,StyleSheet, useWindowDimensions} from 'react-native';
import Logo from '../../../assets/images/logo.png';
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigation } from "@react-navigation/native";


const SignInScreen = () => {
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
    const onRegisterPressed = () => {
        navigatioon.navigate("Registrarse");
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
          placeholder="Password" 
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
          text="No tienes una cuenta?, Registrate."
           onPress={onRegisterPressed}
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

export default SignInScreen;