import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import CustomButton from "./CustomButton/CustomButton";

function Card({ nombre, precio, descripcion, categoria, item }) {
  const { id } = item;
  return (
    <View style={styles.cardView}>
      <Button
        mode="contained"
        buttonColor="#CF443B"
        onPress={() => eliminar(id)}
      >
        Eliminar
      </Button>
      <Text style={styles.title}>{nombre}</Text>
      <Text style={styles.title}>Precio: ${precio}</Text>
      <Text style={styles.title}>{descripcion}</Text>
      <CustomButton text={"Editar"} />
    </View>
  );
}

const styles = StyleSheet.create({
  cardView: {
    backgroundColor: "white",
    borderRadius: 20,
    marginVertical: 5,
    marginHorizontal: 9,
    alignSelf: "stretch",
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
    alignSelf: "stretch",
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "bold",
  },
});

export default Card;
