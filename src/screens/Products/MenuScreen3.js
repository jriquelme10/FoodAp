import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Pressable,
  TouchableHighlight
} from "react-native";
import React, { useEffect, useState,Component } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import Card from "../../components/Card";
import { FlatList } from "react-native-gesture-handler";
import CustomButton from "../../components/CustomButton/CustomButton";
import { Product } from "../../components/Product";


const URLPRODUCTOS = "http://192.168.0.114:8000/api/platos";
const URLCATEGORIAS = "http://192.168.0.5:8000/api/categorias";


export default function MenuScreen3({navigation}) {
  const navigatioon = useNavigation();
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
      onPress={() => {
        navigatioon.navigate('DetailsProduct', {
          productId: item.id,
        });
      }}
    />
  );

  const renderItemCategories = ({ item }) => (
    <CardCategories
      name={item.name}
    />
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
