import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Pressable,
  TouchableHighlight,
} from "react-native";
import React, { useEffect, useState, Component } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import Card from "../../components/Card";
import CardCategories from "../../components/CardCategories";
import { FlatList } from "react-native-gesture-handler";

const URLPRODUCTOS = "http://192.168.1.189:8000/api/platos";
const URLCATEGORIAS = "http://192.168.1.189:8000/api/categorias";

export default function MenuScreen3() {
  const [listaProductos, setListaProducto] = useState([]);
  const [listaCategorias, setListaCategorias] = useState([]);

  useEffect(() => {
    getProductos();
  }, []);

  const getProductos = async () => {
    const { data } = await axios.get(URLPRODUCTOS);
    const { productos } = data;
    setListaProducto(productos);
  };

  const getCategorias = async () => {
    const { data } = await axios.get(URLCATEGORIAS);
    const { category } = data;
    setListaCategorias(category);
  };

  const renderItemProducts = ({ item }) => (
    <Card
      nombre={item.nombre}
      precio={item.precio}
      descripcion={item.descripcion}
      image={item.image}
    />
  );

  const renderItemCategories = ({ item }) => (
    <CardCategories name={item.name} />
  );

  const renderProducts = ({ item }) => (
    <TouchableHighlight
      underlayColor="rgba(73,182,77,0.9)"
      onPress={() => onPressRecipe(item)}
    >
      <View style={styles.container}>
        <Image style={styles.photo} source={{ uri: item.photo_url }} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.category}>{getCategoryName(item.categoryId)}</Text>
      </View>
    </TouchableHighlight>
  );

  return (
    <View>
      <FlatList
        data={listaProductos}
        renderItem={renderItemProducts}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );

  const styles = StyleSheet.create({
    title: {
      fontSize: 20,
      marginBottom: 10,
      fontWeight: "bold",
    },
  });
}
