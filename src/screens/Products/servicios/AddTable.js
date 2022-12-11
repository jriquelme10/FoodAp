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
import CustomButton from "../../../components/CustomButton/CustomButton";
import CustomInput from "../../../components/CustomInput/CustomInput";
import Logo from "../../../../assets/images/logo.png";
import { useNavigation } from "@react-navigation/native";
import CardTables from "../../../components/CardTables";
import axios from "axios";
import { URLBASE } from "../../../../URL_API";

const URLTABLES = `${URLBASE}` + "/api/mesas";

const AddTable = (props) => {
  const { height } = useWindowDimensions();
  const navigatioon = useNavigation();
  const [number_table, setNumber_table] = useState("");
  const onChangeHandler = (numberValue) => {
    setName(numberValue);
  };

  const AlertInsert = (variable) =>
    Alert.alert("Ingreso de Mesa", variable, [
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  const saveTable = async () => {
    if ([number_table].includes("")) {
      Alert.alert("Error", "No ha ingresado un numero a la mesa.", [
        { text: "Ok" },
      ]);
      return;
    }
    console.log("number_table", number_table);
    try {
      await fetch(`${URLBASE}` + "/api/mesa", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          number_table: number_table,
        }),
      });
      AlertInsert("La mesa ha sido ingresada");
      getTables();
    } catch (error) {
      AlertInsert("La mesa no ha sido ingresada");
    }
    setNumber_table("");
  };

  // cargar mesas
  const [listaTables, setListaTables] = useState([]);

  useEffect(() => {
    getTables();
  }, []);

  const getTables = async () => {
    try {
      const { data } = await axios.get(URLTABLES);
      const { table } = data;
      setListaTables(table);
    } catch (error) {
      console.log(error);
    }
  };

  const renderItemTables = ({ item }) => (
    <CardTables
      number={item.number_table}
      eliminar={eliminarTable}
      item={item}
    />
  );

  // fin cargar mesas

  //eliminar mesa

  const eliminarTable = (id) => {
    Alert.alert("¿Quieres eliminar la mesa?", "", [
      { text: "Cancelar" },
      {
        text: "Eliminar",
        onPress: () => {
          deleteTable(id);
        },
      },
    ]);
  };

  const deleteTable = async (id) => {
    const { data } = await axios.delete(`${URLBASE}` + `/api/mesas/${id}`);
    console.log(data);
    getTables();
  };
  //fin eliminar mesa

  return (
    <View style={styles.root}>
      <View
        style={{
          height: 550,
          width: 400,
        }}
      >
        <FlatList
          data={listaTables}
          renderItem={renderItemTables}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
      <Text style={styles.title}> AGREGAR MESAS</Text>
      <TextInput
        style={styles.input}
        placeholder="Numero de mesa"
        value={number_table}
        keyboardType="phone-pad"
        onChangeText={setNumber_table}
      />

      <CustomButton text="Agregar" onPress={saveTable} />
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
export default AddTable;
