import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { ProductsList } from "./ProductsList";
import CategoriesList from "./CategoriesList";
import { ProductDetails } from "./ProductDetails";
import { Cart } from "./Cart";

import { CartIcon } from "../../components/clientComponents/CartIcon";
import { CartProvider } from "./CartContext";
import ClientScreen from "./ClientScreen";
import CardCategories from "../../components/adminComponents/CardCategoria";
import { ProductsListFilter } from "./ProductsListFilter";
import CountDown from "./CountDown";
import WaitScreen from "./WaitScreen";
import LogInScreen from "../LogInScreen/LogInScreen";
import HomeScreen from "../HomeScreen/HomeScreen";
import SignInAdminScreen from "../SigninScreen/SignInAdmin";
import AgregarProductos from "../Products/AgregarProductosScreen";
import AddCategoryScreen from "../Products/servicios/AddCategoryScreen";
import AddTable from "../Products/servicios/AddTable";

const Stack = createNativeStackNavigator();

function NavigationClient() {
  return (
    <NavigationContainer independent={true}>
      <CartProvider>
        <Stack.Navigator screenOptions={{ headerShown: true }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Administrador" component={SignInAdminScreen} />
          <Stack.Screen name="LogInAdmin" component={LogInScreen} />
          <Stack.Screen name="MenuOptions" component={ClientScreen} />
          <Stack.Screen name="AgregarProducto" component={AgregarProductos} />
          <Stack.Screen name="AgregarCategoria" component={AddCategoryScreen} />
          <Stack.Screen name="AgregarMesa" component={AddTable} />
          <Stack.Screen name="ClientTable" component={ClientScreen} />
          <Stack.Screen name="CardCategories" component={CardCategories} />
          <Stack.Screen name="WaitScreen" component={WaitScreen} />
          <Stack.Screen name="CountDown" component={CountDown} />
          <Stack.Screen
            name="Products"
            component={ProductsList}
            options={({ navigation }) => ({
              title: "Products",
              headerTitleStyle: styles.headerTitle,
              headerRight: () => <CartIcon navigation={navigation} />,
            })}
          />
          <Stack.Screen
            name="Categories"
            component={CategoriesList}
            options={({ navigation }) => ({
              title: "Categories",
              headerTitleStyle: styles.headerTitle,
              headerRight: () => <CartIcon navigation={navigation} />,
            })}
          />
          <Stack.Screen
            name="ProductsFilter"
            component={ProductsListFilter}
            options={({ navigation }) => ({
              title: "Productos",
              headerTitleStyle: styles.headerTitle,
              headerRight: () => <CartIcon navigation={navigation} />,
            })}
          />
          <Stack.Screen
            name="ProductDetails"
            component={ProductDetails}
            options={({ navigation }) => ({
              title: "Product details",
              headerTitleStyle: styles.headerTitle,
              headerRight: () => <CartIcon navigation={navigation} />,
            })}
          />
          <Stack.Screen
            name="Cart"
            component={Cart}
            options={({ navigation }) => ({
              title: "My cart",
              headerTitleStyle: styles.headerTitle,
              headerRight: () => <CartIcon navigation={navigation} />,
            })}
          />
          <Stack.Screen name="CartContext" component={Cart} />
          <Stack.Screen name="CartContext1" component={CartProvider} />
        </Stack.Navigator>
      </CartProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20,
  },
});

export default NavigationClient;
