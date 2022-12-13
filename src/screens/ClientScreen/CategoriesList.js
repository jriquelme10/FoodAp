import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Pressable,
} from "react-native";
import React, { useEffect, useState, Component } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import CardCategories from "../../components/CardCategories";
import { FlatList } from "react-native-gesture-handler";
import { URLBASE } from "../../../URL_API";
const URLCATEGORIAS = `${URLBASE}` + "/api/categorias";

const CategoriesList = () => {
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
    <CardCategories category_id={item.id} name={item.name} />
  );

  return (
    <View>
      <FlatList
        data={listaCategorias}
        renderItem={renderItemCategories}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default CategoriesList;
