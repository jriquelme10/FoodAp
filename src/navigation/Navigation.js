import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from 'react-native';
import React from "react";
import SignInScreen from "../screens/SigninScreen";

import HomeScreen from "../screens/HomeScreen/HomeScreen";
import SignInAdminScreen from "../screens/SigninScreen/SignInAdmin";
import LogInScreen from "../screens/LogInScreen/LogInScreen";
import ClientScreen from "../screens/ClientScreen/ClientScreen";
//import MenuScreen from "../screens/Products/MenuScreen";
import MenuScreen from "../screens/Products/MenuScreen2";
import AgregarProductos from "../screens/Products/AgregarProductosScreen";
import AddCategoryScreen from "../screens/Products/servicios/AddCategoryScreen";
import AddTable from "../screens/Products/servicios/AddTable";
import ProductDetails from "../screens/Products/ProductDetails";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="DetailProducts" component={ProductDetails} />
      <Stack.Screen name="Iniciar Sesión Admin" component={SignInAdminScreen} />
      <Stack.Screen name="LogInAdmin" component={LogInScreen} />
      <Stack.Screen name="ClientTable" component={ClientScreen} />
      <Stack.Screen name="MenuOptions" component={MenuScreen} />
      <Stack.Screen name="AgregarProducto" component={AgregarProductos} />
      <Stack.Screen name="AgregarCategoria" component={AddCategoryScreen} />
      <Stack.Screen name="AgregarMesa" component={AddTable} />


    </Stack.Navigator>
  );
};


const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20
  }
});
export default Navigation;
