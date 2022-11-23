import React, { useEffect, useState } from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import SignInScreen from "./src/screens/SigninScreen/SignInScreen";
import RegisterScreen from "./src/screens/RegisterScreen/RegisterScreen";
import Navigation from "./src/navigation/Navigation";
import axios from "axios";

const URL = "http://192.168.1.189/testBackEnd/public/plato";

import Card from "./src/components/Card";
import { FlatList } from "react-native-gesture-handler";

const App = () => {
  return (
    <NavigationContainer styles={styles.root}>
      <Navigation />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "F4F4F2",
  },
});

export default App;
/*
export default function App() {
  const [listaProductos, setListaProducto] = useState([]);

  useEffect(() => {
    getProductos();
  }, []);

  const getProductos = async () => {
    const { data } = await axios.get(URL);
    const { productos } = data;
    setListaProducto(productos);
  };

  const renderItem = ({ item }) => (
    <Card nombre={item.nombre} precio={item.precio} />
  );

  return (
    <FlatList
      data={listaProductos}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}
*/
