import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import Card from "../../components/Card";
import { FlatList } from "react-native-gesture-handler";

const URL = `${URLBASE}` + "/api/platos";

export default function MenuScreen3() {
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
    <Card
      nombre={item.nombre}
      precio={item.precio}
      descripcion={item.descripcion}
    />
  );

  return (
    <FlatList
      data={listaProductos}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}
