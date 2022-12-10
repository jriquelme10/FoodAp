import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import axios from "axios";
import { URLBASE } from "../../../URL_API";
import { Product } from "../../components/Product";
//import { getProducts } from '../services/ProductsService.js';
const URLPRODUCTOS = `${URLBASE}` + "/api/platos";
export function ProductsList({ navigation }) {
  const [listProducts, setListProducts] = useState([]);

  /*function renderProduct({item: product}) {
    return (
      <Product {...product} 
      onPress={() => {
        navigation.navigate('ProductDetails', {
          productId: product.id,
        });
      }}
      />
    );
  }
  

  /*const [products, setProducts] = useState([]);
  
  useEffect(() => {
   setProducts(getProducts());
  });
  */

  const getProducts = async () => {
    const { data } = await axios.get(URLPRODUCTOS);
    const { productos } = data;
    setListProducts(productos);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const renderItemProducts = ({ item: product }) => (
    <Product
      name={product.nombre}
      price={product.precio}
      image={{ uri: product.url }}
      onPress={() => {
        navigation.navigate("ProductDetails", {
          productId: product.id,
          name: product.nombre,
          price: product.precio,
          description: product.descripcion,
          image: product.url,
        });
      }}
    />
  );

  return (
    <View>
      <FlatList
        style={styles.productsList}
        contentContainerStyle={styles.productsListContainer}
        keyExtractor={(item) => item.id.toString()}
        data={listProducts}
        renderItem={renderItemProducts}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  productsList: {
    backgroundColor: "#eeeeee",
  },
  productsListContainer: {
    backgroundColor: "#eeeeee",
    paddingVertical: 8,
    marginHorizontal: 8,
  },
});
