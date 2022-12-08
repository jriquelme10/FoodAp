import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  useWindowDimensions,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import Logo from "../../../../assets/images/logo.png";
import CustomButton from "../../../components/CustomButton/CustomButton";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { set } from "react-hook-form";

import CardCategoria from "../../../components/CardCategoria";

const URLCATEGORIAS = "http://192.168.1.189:8000/api/categorias";

const AddCategoryScreen = (propd) => {
  const { height } = useWindowDimensions();
  const navigatioon = useNavigation();
  const [name, setName] = useState("");
  const onChangeHandler = (nameValue) => {
    setName(nameValue);
  };
  // cargar categorias
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
    <CardCategoria
      name={item.name}
      eliminar={eliminarCategoria}
      item={item}
      editar={updateCategory}
    />
  );
  // fin cargar categorias

  //eliminar categoria

  const eliminarCategoria = (id) => {
    Alert.alert("¿Quieres eliminar la categoria?", "", [
      { text: "Cancelar" },
      {
        text: "Eliminar",
        onPress: () => {
          deleteCategory(id);
        },
      },
    ]);
  };

  const deleteCategory = async (id) => {
    const { data } = await axios.delete(
      `http://192.168.1.189:8000/api/categorias/${id}`
    );
    console.log(data);
    getCategorias();
  };
  //fin eliminar categoria

  const AlertInsert = (variable) =>
    Alert.alert("Ingreso de Categoria", variable, [
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  //guardar categoria
  const saveCategory = async () => {
    if ([name].includes("")) {
      Alert.alert("Error", "No ha ingresado un nombre a la categoria.", [
        { text: "Ok" },
      ]);
      return;
    }
    try {
      await fetch("http://192.168.1.189:8000/api/categoria", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
        }),
      });
      AlertInsert("La categoria ha sido ingresada");
      getCategorias();
    } catch (error) {
      AlertInsert("La categoria no ha sido ingresada");
    }
    setName("");
  };

  //fin guardar categoria

  //editar categoria
  const editarProducto = async (id) => {
    const { data } = await axios.get(
      `http://192.168.1.189:8000/api/categoria/${id}`
    );
    console.log(data);
    // setId(data.id);
    setName(data.name);
  };
  const updateCategory = async (id) => {
    if ([name].includes("")) {
      Alert.alert("Error", "No ha ingresado un nuevo nombre a la categoria.", [
        { text: "Ok" },
      ]);
      return;
    }
    const obj = { id, name };
    const { data } = await axios.put(
      `http://192.168.1.189:8000/api/categoriaUPDATE`,
      obj
    );
    console.log(data);
    getCategorias();
    setName("");
  };
  //fin editar categoria

  return (
    <View style={styles.root}>
      <View
        style={{
          height: 550,
          width: 400,
        }}
      >
        <FlatList
          data={listaCategorias}
          renderItem={renderItemCategories}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>

      <TextInput
        style={styles.input}
        placeholder="Nombre de la categoría"
        value={name}
        onChangeText={setName}
      />

      <CustomButton text="Agregar" onPress={saveCategory} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },

  logo: {
    width: "100%",
    maxWidth: 200,
    height: 70,
  },

  input: {
    backgroundColor: "white",
    width: "100%",
    height: 40,
    borderColor: "#e8e8e8",
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 8,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "bold",
  },
});

export default AddCategoryScreen;
