import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity, StyleSheet, Text, View ,Image} from "react-native";
import { Button } from "react-native-paper";
import CustomButton from "./CustomButton/CustomButton";

function Card({ id, nombre, precio, descripcion, categoria,onPress,image}) {
  return (

    <TouchableOpacity style={styles.cardView} onPress={onPress}>
      <View>
      <Image style={styles.thumb}
        source={image}
      />
      <Text style={styles.title}>{nombre}</Text>
      <Text style={styles.title}>Precio: ${precio}</Text>
      <Text style={styles.title}>{descripcion}</Text>
      </View>
    </TouchableOpacity>
    
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
    thumb: {
      height: 260,
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
      width: '100%',
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
