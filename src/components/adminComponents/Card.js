import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

function Card({ id, nombre, precio, descripcion, categoria }) {
  return (
    <View style={styles.cardView}>
      <Text style={{ fontSize: 20 }}>{nombre}</Text>
      <Text style={{ fontSize: 18 }}>Precio: ${precio}</Text>
      <Text style={{ fontSize: 16 }}>{descripcion}</Text>
      <Button mode="contained-tonal" buttonColor="#3C7EB1">
        Agregar
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
});
export default Card;
