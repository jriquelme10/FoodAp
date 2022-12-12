import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import SignInScreen from "../screens/SigninScreen";
import RegisterScreen from "../screens/RegisterScreen/RegisterScreen";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import SignInAdminScreen from "../screens/SigninScreen/SignInAdmin";
import LogInScreen from "../screens/LogInScreen/LogInScreen";

//import MenuScreen from "../screens/Products/MenuScreen";
//import MenuScreen from "../screens/Products/MenuScreen2";
import NavigationClient from "../screens/ClientScreen/NavigationClient";
import AgregarProductos from "../screens/Products/AgregarProductosScreen";
import ImagePickerExample from "../screens/Products/servicios/ImagePickerExample";
import AddCategoryScreen from "../screens/Products/servicios/AddCategoryScreen";
import AddTable from "../screens/Products/servicios/AddTable";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Iniciar Sesión Admin" component={SignInAdminScreen} />
      <Stack.Screen name="LogInAdmin" component={LogInScreen} />
      <Stack.Screen name="MenuOptions" component={NavigationClient} />
      <Stack.Screen name="AgregarProducto" component={AgregarProductos} />
      <Stack.Screen name="AgregarCategoria" component={AddCategoryScreen} />
      <Stack.Screen name="AgregarMesa" component={AddTable} />
    </Stack.Navigator>
  );
};

export default Navigation;
