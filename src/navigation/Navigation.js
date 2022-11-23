import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import SignInScreen from "../screens/SigninScreen";
import RegisterScreen from "../screens/RegisterScreen/RegisterScreen";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import SignInAdminScreen from "../screens/SigninScreen/SignInAdmin";
import LogInScreen from "../screens/LogInScreen/LogInScreen";
import ClientScreen from "../screens/ClientScreen/ClientScreen";
import MenuScreen from "../screens/Products/MenuScreen";
import AgregarProductos from "../screens/Products/AgregarProductosScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Iniciar Sesión Admin" component={SignInAdminScreen} />
      <Stack.Screen name="LogInAdmin" component={LogInScreen} />
      <Stack.Screen name="ClientTable" component={ClientScreen} />
      <Stack.Screen name="MenuOptions" component={MenuScreen} />
      <Stack.Screen name="AgregarProducto" component={AgregarProductos} />
    </Stack.Navigator>
  );
};

export default Navigation;
