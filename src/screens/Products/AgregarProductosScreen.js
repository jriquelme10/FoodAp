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


const SignInScreen = () => {
  const { nombre, setNombre } = useState("");
  const onChangeHandler = (nombreValue) => {
    setNombre(nombreValue);
  };
  const { categoria, setCategoria } = useState("");
  const { descripcion, setDescripcion } = useState("");
  const { precio, setPrecio } = useState("");
  const { height } = useWindowDimensions();
  const navigatioon = useNavigation();
  const onSignInPressed = () => {
    console.warn("Iniciar Sesion");
  };
  const onForgotPasswordPressed = () => {
    console.warn("Olvidaste la contraseña");
  };
  const onRegisterPressed = () => {
    navigatioon.navigate("Registrarse");
  };
  return (
    <View style={styles.root}>
      <Image
        source={Logo}
        style={[styles.logo, { height: height * 0.3 }]}
        resizeMode="contain"
      />
      <CustomInput
        placeholder="nombre"
        value={nombre}
        setValue={setDescripcion}
      />
      <CustomInput
        placeholder="categoria"
        value={categoria}
        setValue={setCategoria}
      />
      <CustomInput
        placeholder="descripcion"
        value={descripcion}
        setValue={setDescripcion}
      />
      <CustomInput placeholder="precio" value={precio} setValue={setPrecio} />

      <Button title = "agregar"  onPress={() => console.log(nombre)} />
    </View>
  );
};

function saveProduct (nombreP,categoriaP,descripcionP) {
  fetch("http://192.168.1.189:8000/api/plato", {
    method: "POST",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      nombre: nombreP,
      categoria: categoriaP,
      descripcion: descripcionP,
      precio: 1000
    })
})
.then(res => res.json())
.then(data => {
  console.log("exito");
})
.catch(err => {
    console.log("Error occurred: " + err);

})

}
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
