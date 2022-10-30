import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import SignInScreen from '../screens/SigninScreen';
import RegisterScreen from '../screens/RegisterScreen/RegisterScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import SignInAdminScreen from '../screens/SigninScreen/SignInAdmin';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
      <Stack.Navigator screenOptions={{headerShown:true}}>
      <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Registrarse" component={RegisterScreen}/>
        <Stack.Screen name="Iniciar Sesión" component={SignInScreen}/>
        <Stack.Screen name="Iniciar Sesión Admin" component={SignInAdminScreen}/>

        


        </Stack.Navigator>
  )
};

export default Navigation;