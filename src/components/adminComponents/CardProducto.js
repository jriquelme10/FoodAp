import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity, StyleSheet, Text, View, Image } from "react-native";
import { Button } from "react-native-paper";
import CustomButton from "../CustomButton/CustomButton";

function Card({
  nombre,
  precio,
  descripcion,
  categoria,
  imagen,
  item,
  eliminar,
  editar,
}) {
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
      <Text style={styles.price}>Precio: ${precio}</Text>
      {imagen && (
        <Image source={{ uri: imagen }} style={{ width: 200, height: 200 }} />
      )}
      <Text style={styles.descripcion}>{descripcion}</Text>
      <Button
        mode="contained-tonal"
        buttonColor="#3C7EB1"
        onPress={() => editar(id)}
      >
        Editar
      </Button>
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
  price: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "bold",
  },
  descripcion: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: "bold",
  },
});

export default Card;
