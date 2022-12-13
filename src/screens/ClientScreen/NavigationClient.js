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
import { CartContext } from "./CartContext";
import ClientScreen from "./ClientScreen";
import CardCategories from "../../components/adminComponents/CardCategoria";
import { ProductsListFilter } from "./ProductsListFilter";

const Stack = createNativeStackNavigator();

function NavigationClient() {
  return (
    <CartProvider>
      <NavigationContainer independent={true}>
        <Stack.Navigator>
          <Stack.Screen name="ClientTable" component={ClientScreen} />
          <Stack.Screen name="CardCategories" component={CardCategories} />
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
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20,
  },
});

export default NavigationClient;
