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
import { Picker } from "@react-native-picker/picker";
import axios from "axios";
import { set } from "react-hook-form";

const AddProductsScreen = (props) => {
  useEffect(() => {
    (async function () {
      try {
        const response = await fetch("http://192.168.0.5:8000/api/categorias", {
          method: "GET",
        });
        const data = await response.json();
        setCategorias(data);
        categorypicker();
      } catch (error) {
        console.log("error categorias");
      }
    })();
  }, []);

  const [nombre, setNombre] = useState("");
  const onChangeHandler = (nombreValue) => {
    setNombre(nombreValue);
  };
  const [categoryPicker, setCategorPicker] = useState("");
  const [Picker, setPicker] = useState("");
  const [listaCategorias, setListCategorias] = useState([]);
  const [id, setID] = useState("");
  const [categoria, setCategorias] = useState("");
  const { categorias: categorias } = props;
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const { height } = useWindowDimensions();
  const navigatioon = useNavigation();

  const AlertInsert = () =>
    Alert.alert("Ingreso de producto", "El producto ha sido agregado", [
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  // const saveProduct = () => {
  //   console.log(nombre, categoria, descripcion, precio);
  //   fetch("http://192.168.1.189:8000/api/plato", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       accept: "application/json",
  //     },
  //     body: JSON.stringify({
  //       nombre: nombre,
  //       categoria: categoria,
  //       descripcion: descripcion,
  //       precio: precio,
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("exito");
  //     })
  //     .catch((err) => {
  //       console.log("Error occurred: " + err);
  //     });categorias
  // };
  //url : 192.168.1.189
  const saveProduct = async () => {
    try {
      await fetch("http://192.168.1.189:8000/api/plato", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: nombre,
          categoria: categoria,
          precio: precio,
          descripcion: descripcion,
        }),
      });
    } catch (error) {
      console.log("El producto no ha sido ingresado");
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
      <TextInput
        style={styles.input}
        placeholder="categoria"
        value={categoria}
        onChangeText={setCategorias}
      />
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
    borderRadius: 10,
    fontSize: 17,
    marginBottom: 10,
    width: 330,
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
});

export default AddProductsScreen;
