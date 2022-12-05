import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  useWindowDimensions,
} from "react-native";
import React, { useState } from "react";
import Logo from "../../../../assets/images/logo.png";
import CustomButton from "../../../components/CustomButton/CustomButton";

import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { set } from "react-hook-form";
const AddCategoryScreen = (propd) => {
  const { height } = useWindowDimensions();
  const navigatioon = useNavigation();
  const [name, setName] = useState("");
  const onChangeHandler = (nameValue) => {
    setName(nameValue);
  };

  const saveCategory = async () => {
    await fetch("http://192.168.0.5:8000/api/categoria", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
      }),
    });
  };

  return (
    <View style={styles.root}>
      <Image
        source={Logo}
        style={[styles.logo, { height: height * 0.3 }]}
        resizeMode="contain"
      />
      <Text style={styles.title}> AGREGAR CATEGORIAS</Text>
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
