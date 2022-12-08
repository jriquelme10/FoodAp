import React, { useState, useEffect } from "react";
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
import Logo from "../../../assets/images/logo.png";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { set } from "react-hook-form";
import { Picker } from "@react-native-picker/picker";
import SelectPicker from "react-native-form-select-picker"; // Import the package
const options = ["Apple", "Banana", "Orange"];
const URL = "http://192.168.0.114:8000/api/categorias";

const AddProductsScreen = (props) => {
  const [listaCategory, setListaCategory] = useState("");
  const [selected, setSelected] = useState("");

  useEffect(() => {
    getCategorias();
  }, []);

  const getCategorias = async () => {
    const { data } = await axios.get(URL);
    const { category } = data;
    setListaCategory(category);
  };

  // useEffect(() => {
  //   (async function () {
  //     try {
  //       const response = await fetch("http://192.168.0.5:8000/api/categorias", {
  //         method: "GET",
  //       });
  //       const data = await response.json();
  //       setCategorias(data);
  //       categorypicker();
  //     } catch (error) {
  //       console.log("error categorias");
  //     }
  //   })();
  // }, []);

  const [nombre, setNombre] = useState("");
  const onChangeHandler = (nombreValue) => {
    setNombre(nombreValue);
  };
  const [categoryPicker, setCategorPicker] = useState("");
  const [selectPicker, setSelectPicker] = useState("");
  const [id, setID] = useState("");
  const [categoria, setCategorias] = useState([]);
  const array = [
    { id: "1", nombre: "diego" },
    { id: "2", nombre: "alfonso" },
    { id: "3", nombre: "miguel" },
  ];
  const { categorias: categorias } = props;
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [image, setImage] = useState("");
  const { height } = useWindowDimensions();
  const navigatioon = useNavigation();

  const AlertInsert = (variable) =>
    Alert.alert("Ingreso de producto", variable, [
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  const saveProduct = async () => {
    if ([nombre, descripcion, precio, selected].includes("")) {
      Alert.alert("Error", "Todos los campos son obligatorios.", [
        { text: "Ok" },
      ]);
      return;
    }
    try {
      await fetch("http://192.168.0.5:8000/api/plato", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: nombre,
          categoria: selected,
          precio: precio,
          descripcion: descripcion,
          image:image,
        }),
      });
      AlertInsert("El producto ha sido ingresado");
    } catch (error) {
      AlertInsert("El producto no ha sido ingresado");
    }
  };

  // const saveProduct = async () => {
  //   console.log(nombre, categoria, descripcion, precio);
  //   const obj = { nombre, categoria, descripcion, precio };
  //   const { data } = await axios.post(URL, obj);
  //   console.log(data);
  // };

  return (
    <View style={styles.root}>
      <Image
        source={Logo}
        style={[styles.logo, { height: height * 0.3 }]}
        resizeMode="contain"
      />
      <Text style={styles.title}> AGREGAR PRODUCTOS</Text>
      <TextInput
        style={styles.input}
        placeholder="nombre"
        value={nombre}
        onChangeText={setNombre}
      />
      {/* <Picker
        selectedValue={Picker}
        onValueChange={(select) => setPicker(select)}
        style={styles.picker}
        itemStyle={{ height: 80 }}
      >
        <Picker.Item
          style={{ color: "white" }}
          label="- Seleccione -"
          value=""
        />
        {categorias.map((elemento) => (
          <Picker.Item
            key={elemento.id}
            label={elemento.nombre}
            value={elemento.id}
          />
        ))}
        
      </Picker> */}
      <View style={styles.picker}>
        <SelectPicker
          titleText="Seleccione una categoria"
          placeholder="categoria"
          onSelectedStyle={{ fontSize: 12, color: "#6B695E" }}
          onValueChange={(value) => {
            // Do anything you want with the value.
            // For example, save in state.
            setSelected(value);
          }}
          selected={selected}
        >
          {Object.values(listaCategory).map((val) => (
            <SelectPicker.Item key={val.id} label={val.name} value={val.name} />
          ))}
        </SelectPicker>
      </View>

      {/* <View style={styles.campo}>
        <Picker
          selectedValue={selectPicker}
          onValueChange={(select) => setSelectPicker(select)}
        >
          <Picker.Item label="- Seleccione -" value="" />
          {array.map((elemento) => (
            <Picker.Item
              key={elemento.id}
              label={elemento.name}
              value={elemento.id}
            />
          ))}
        </Picker>
      </View> */}

      <TextInput
        style={styles.input}
        placeholder="descripcion"
        value={descripcion}
        onChangeText={setDescripcion}
      />

      <TextInput
        style={styles.input}
        placeholder="precio"
        value={precio}
        keyboardType="phone-pad"
        onChangeText={setPrecio}
      />
      <TextInput
        style={styles.input}
        placeholder="Ingresa el link de tu imagen"
        value={image}
        onChangeText={setImage}
      />

      <CustomButton text="Agregar" onPress={saveProduct} />
    </View>
  );
};

// const saveProduct = (nombre, categoria, descripcion) => {
//   fetch("http://192.168.1.189:8000/api/plato", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       nombre: "nombre",
//       categoria: "categoria",
//       descripcion: "descripcion",
//       precio: 1000
//     }),
//   })
//     .then((res) => {
//       console.log(res.status);
//       console.log(res.headers);
//       return res.json();
//     })
//     .then(
//       (result) => {
//         console.log(result);
//       },
//       (error) => {
//         console.log(error);
//       }
//     );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
  },
  root: {
    alignItems: "center",
    padding: 20,
  },

  logo: {
    width: "100%",
    maxWidth: 200,
    height: 70,
  },
  picker: {
    backgroundColor: "#FFF",
    borderRadius: 5,
    fontSize: 15,
    marginBottom: 10,
    width: 350,
    alignSelf: "center",
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
  campo: {
    backgroundColor: "#FFF",
    marginHorizontal: 20,
    marginVertical: 20,
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    borderRadius: 20,
  },
});

export default AddProductsScreen;
