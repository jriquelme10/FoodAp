import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Image,
    Pressable,
  } from "react-native";
  import React, { useEffect, useState,Component } from "react";
  import { useNavigation } from "@react-navigation/native";
  import axios from "axios";
  import Card from "../../components/Card";
  import CardCategories from "../../components/CardCategories";
  import { FlatList } from "react-native-gesture-handler";
  
  const URLCATEGORIAS = "http://192.168.0.5:8000/api/categorias";
  
  
  export default function MenuScreen4() {
    const [listaCategorias, setListaCategorias] = useState([]);
    
  
    useEffect(() => {
      getCategorias();
    }, []);
  
  
    const getCategorias = async () => {
      const { data } = await axios.get(URLCATEGORIAS);
      const { category } = data;
      setListaCategorias(category);
    };
  
    const renderItemCategories = ({ item }) => (
      <CardCategories
        name={item.name}
      />
    );
  
    return (
  
      <View>
  
        <FlatList
        data={listaCategorias}
        renderItem={renderItemCategories}
        keyExtractor={(item) => item.id.toString()}/>
        
      </View>
      
    );
  }
  
