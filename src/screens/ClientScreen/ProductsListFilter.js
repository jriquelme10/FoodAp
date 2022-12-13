import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Alert,
  Button,
} from "react-native";
import axios from "axios";
import { URLBASE } from "../../../URL_API";
import { Product } from "../../components/clientComponents/Product";
import { CustomButton } from "../../components/CustomButton";

export function ProductsListFilter({ route, navigation }) {
  const [listProducts, setListProducts] = useState([]);
  const URLPRODUCTOS =
    `${URLBASE}` + `/api/platosFilter/${route.params.category_id}}}`;

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
      <Button title={route.params.nameCategory} />
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
