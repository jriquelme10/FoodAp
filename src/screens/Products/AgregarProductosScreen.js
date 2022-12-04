import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import Logo from "../../../assets/images/logo.png";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { set } from "react-hook-form";

const SignInScreen = (props) => {
  const [nombre, setNombre] = useState("");
  const onChangeHandler = (nombreValue) => {
    setNombre(nombreValue);
  };
  const [categoria, setCategoria] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const { height } = useWindowDimensions();
  const navigatioon = useNavigation();

  const URL = "http://192.168.1.189:8000/api/plato";

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
  //     });
  // };
  const saveProduct = async () => {
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
      <TextInput placeholder="nombre" value={nombre} onChangeText={setNombre} />
      <TextInput
        placeholder="categoria"
        value={categoria}
        onChangeText={setCategoria}
      />
      <TextInput
        placeholder="descripcion"
        value={descripcion}
        onChangeText={setDescripcion}
      />
      <TextInput placeholder="precio" value={precio} onChangeText={setPrecio} />

      <Button title="agregar" onPress={saveProduct} />
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
});

export default SignInScreen;
