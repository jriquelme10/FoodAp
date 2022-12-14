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
    <View style={styles.card}>

    
      <Image
        style={styles.thumb}
        source={{uri:imagen}}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{nombre}</Text>
        <Text style={styles.price}>$ {precio}</Text>
        <Text style={styles.description}>{descripcion}</Text>
      </View>
        

      <CustomButton
        mode="contained-tonal"
        buttonColor="#3C7EB1"
        onPress={() => editar(id)}
        text="Editar"
      />
      <CustomButton
        mode="contained-tonal"
        buttonColor="#3C7EB1"
        onPress={() => eliminar(id)}
        text="Eliminar"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
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
    width: '100%',
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  price: {
    marginTop:8,
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom:10,
  },
});

export default Card;
