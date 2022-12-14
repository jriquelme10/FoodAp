import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import CustomButton from "../CustomButton/CustomButton";

function CardCategories({ name, eliminar, item, editar }) {
  const { id } = item;
  return (
    <View>
      <View style={styles.card}>
        <View style={styles.infoContainer}>
          <Text style={[styles.name, { textAlign: "center" }]}>{name}</Text>
        </View>

        <CustomButton
          mode="contained-tonal"
          buttonColor="#3C7EB1"
          onPress={() => editar(id)}
          text="Cambiar Nombre"
        />
        <CustomButton
          mode="contained-tonal"
          buttonColor="#3C7EB1"
          onPress={() => eliminar(id)}
          text="Eliminar"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardView: {
    backgroundColor: "white",
    borderRadius: 20,
    marginVertical: 5,
    marginHorizontal: 20,
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
    textAlign: "center",
    marginBottom: 10,
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: "black",
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    marginVertical: 20,
  },
  thumb: {
    height: 260,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    width: "100%",
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
  },
  price: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
});
export default CardCategories;
