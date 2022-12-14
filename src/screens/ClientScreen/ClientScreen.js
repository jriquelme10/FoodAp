import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
  Alert,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import CustomButton from "../../components/CustomButton/CustomButton";
import CustomInput from "../../components/CustomInput/CustomInput";
import Logo from "../../../assets/images/logo.png";
import SelectPicker from "react-native-form-select-picker";
import axios from "axios"; // Import the package
import { URLBASE } from "../../../URL_API";
import { CartContext } from "./CartContext";
import { useNavigation } from "@react-navigation/native";
const URL = `${URLBASE}` + "/api/mesas";

const ClientScreen = (props) => {
  const [listnumTable, setListNumTable] = useState("");
  const [selectedTable, setSelectedTable] = useState("");
  const context = useContext(CartContext);
  const navigation = useNavigation();
  const { height } = useWindowDimensions();

  const onSendPressed = () => {
    if ([selectedTable].includes("")) {
      Alert.alert("Error", "No ha seleccionado una mesa.", [{ text: "Ok" }]);
      return;
    }
    navigation.navigate("Products");
  };

  useEffect(() => {
    getTables();
  }, []);

  const getTables = async () => {
    const { data } = await axios.get(URL);
    const { table } = data;
    setListNumTable(table);
  };

  return (
    <View style={styles.root}>
      <Image
        source={Logo}
        style={[styles.logo, { height: height * 0.3 }]}
        resizeMode="contain"
      />
      <Text style={styles.title}> INGRESA EL NÚMERO DE TU MESA </Text>

      <View style={styles.picker}>
        <SelectPicker
          titleText="Seleccione una mesa"
          placeholder="Mesas"
          onSelectedStyle={{ fontSize: 12, color: "#6B695E" }}
          onValueChange={(value) => {
            // Do anything you want with the value.
            // For example, save in state.
            setSelectedTable(value);
          }}
          selected={selectedTable}
        >
          {Object.values(listnumTable).map((val) => (
            <SelectPicker.Item
              key={val.id}
              label={val.number_table}
              value={val.number_table}
            />
          ))}
        </SelectPicker>
      </View>
      <CustomButton text="Ingresar" onPress={onSendPressed} />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "bold",
  },
  picker: {
    backgroundColor: "#FFF",
    borderRadius: 5,
    fontSize: 15,
    marginBottom: 10,
    width: 350,
    alignSelf: "center",
  },
  logo: {
    width: "100%",
    maxWidth: 200,
    height: 70,
  },
  root: {
    alignItems: "center",
    padding: 20,
  },
});

export default ClientScreen;
