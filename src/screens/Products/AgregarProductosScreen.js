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
  Modal,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Pressable,
  Platform,
} from "react-native";
import Logo from "../../../assets/images/logo.png";
import CustomInput from "../../components/CustomInput/CustomInput";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { set } from "react-hook-form";
import SelectPicker from "react-native-form-select-picker"; // Import the package
import equis from "../../../assets/images/equis.png";
import CardProducto from "../../components/CardProducto";
import * as ImagePicker from "expo-image-picker";
import { launchImageLibrary } from "react-native-image-picker";

import { URLBASE } from "../../../URL_API";
const URL = `${URLBASE}` + "/api/categorias";

const AddProductsScreen = (props) => {
  const [listaCategory, setListaCategory] = useState("");
  const [selected, setSelected] = useState("");
  const [existe, setExiste] = useState("no");
  const [selectedImage, setSelectedImage] = useState(ImagePicker.ImageInfo);

  useEffect(() => {
    getCategorias();
    getProductos();
  }, []);

  const getCategorias = async () => {
    const { data } = await axios.get(URL);
    const { category } = data;
    setListaCategory(category);
  };

  const [nombre, setNombre] = useState("");
  const onChangeHandler = (nombreValue) => {
    setNombre(nombreValue);
  };
  const { categorias: categorias } = props;
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const { height } = useWindowDimensions();
  const navigatioon = useNavigation();
  const [id, setId] = useState("");

  const [modalVisible, setModalVisible] = useState(false);

  //eliminar producto
  const eliminarProducto = (id) => {
    Alert.alert("¿Quieres eliminar el producto?", "", [
      { text: "Cancelar" },
      {
        text: "Eliminar",
        onPress: () => {
          deleteProducto(id);
        },
      },
    ]);
  };

  const deleteProducto = async (id) => {
    const { data } = await axios.delete(`${URLBASE}` + `/api/platos/${id}`);
    console.log(data);
    getProductos();
  };
  //fin eliminar producto

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
      await fetch(`${URLBASE}` + "/api/plato", {
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
        }),
      });
      AlertInsert("El producto ha sido ingresado");
      getProductos();
    } catch (error) {
      AlertInsert("Eror de servidor, el producto no ha sido ingresado");
    }
    setNombre("");
    setSelected("");
    setPrecio("");
    setDescripcion("");
  };

  // cargar productos
  const ProductosURL = `${URLBASE}` + "/api/platos";
  const [listaProductos, setListaProductos] = useState([]);

  const getProductos = async () => {
    const { data } = await axios.get(ProductosURL);
    const { productos } = data;
    setListaProductos(productos);
  };

  const renderItem = ({ item }) => (
    <CardProducto
      nombre={item.nombre}
      precio={item.precio}
      descripcion={item.descripcion}
      imagen={item.url}
      item={item}
      eliminar={eliminarProducto}
      editar={editarProducto}
    />
  );
  // fin cargar productos

  //editar producto
  const editarProducto = async (id) => {
    const { data } = await axios.get(`${URLBASE}` + `/api/plato/${id}`);
    console.log(data);
    setId(data.id);
    setNombre(data.nombre);
    setSelected(data.categoria);
    setPrecio(data.precio);
    setDescripcion(data.descripcion);
    setExiste("si");
    setModalVisible(true);
  };
  const updateProduct = async () => {
    const obj = { id, nombre, selected, precio, descripcion };
    const { data } = await axios.put(`${URLBASE}` + `/api/platoUPDATE`, obj);
    console.log(data);
    getProductos();
    setNombre("");
    setSelected("");
    setPrecio("");
    setDescripcion("");
    setModalVisible(false);
  };
  //fin editar producto

  //imagen 2
  const pickImage = async () => {
    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });
    if (pickerResult.cancelled === true) return;
    setSelectedImage(pickerResult);
  };

  const uploadImage = async () => {
    const uri =
      Platform.OS === "android"
        ? selectedImage.uri
        : selectedImage.uri.replace("file://", "");
    const filename = selectedImage.uri.split("/").pop();
    const match = /\.(\w+)$/.exec(filename);
    const ext = match?.[1];
    const type = match ? `image/${match[1]}` : `image`;
    const formData = new FormData();
    console.log(formData);

    formData.append("nombre", nombre);
    formData.append("categoria", selected);
    formData.append("precio", precio);
    formData.append("descripcion", descripcion);

    formData.append("image", {
      uri,
      name: `image.${ext}`,
      type,
    });

    console.log(formData);
    try {
      const { data } = await axios.post(`${URLBASE}` + "/api/plato", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (!data.isSuccess) {
        alert("Error en agregar");
        return;
      }
      alert("Producto Agregado");
    } catch (err) {
      console.error(err.response.data);
      alert("Algo salio mal");
    } finally {
      setSelectedImage(undefined);
    }
  };

  //fin imagen 2

  return (
    <View style={styles.container}>
      <FlatList
        data={listaProductos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <Button
        title="Agregar Producto"
        onPress={() => {
          setExiste("no");
          setModalVisible(true);
        }}
      />
      <Modal
        animationType="slide"
        onDismiss={() => console.log("Modal close")}
        onShow={() => console.log("Modal open")}
        transparent
        visible={modalVisible}
      >
        <SafeAreaView style={styles.contenido}>
          <View style={styles.root}>
            <View
              style={{
                height: 20,
                width: "100%",
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(!modalVisible);
                  setNombre("");
                  setSelected("");
                  setPrecio("");
                  setDescripcion("");
                }}
              >
                <Image
                  source={equis}
                  style={{
                    height: 40,
                    width: 50,
                    paddingRight: 30,
                    marginRight: 30,
                  }}
                />
              </TouchableOpacity>
            </View>
            {existe === "si" ? (
              <Text style={styles.title}> ACTUALIZAR PRODUCTO</Text>
            ) : (
              <Text style={styles.title}> AGREGAR PRODUCTO</Text>
            )}
            <TextInput
              style={styles.input}
              placeholder="nombre"
              value={nombre}
              onChangeText={setNombre}
            />

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
                  <SelectPicker.Item
                    key={val.id}
                    label={val.name}
                    value={val.name}
                  />
                ))}
              </SelectPicker>
            </View>

            <TextInput
              style={styles.input}
              placeholder="descripcion"
              value={descripcion}
              onChangeText={setDescripcion}
            />

            <Button
              title="Pick an image from camera roll"
              onPress={pickImage}
            />
            {selectedImage && (
              <Image
                source={{ uri: selectedImage.uri }}
                style={{ width: 200, height: 200 }}
              />
            )}

            {/* <Pressable
              style={styles.btnImagen}
              onPress={() => handleChoosePhoto()}
            >
              <Text style={styles.btnImagenTexto}>Agregar Imagen</Text>
            </Pressable> */}

            {/* <Image
              style={{ alignSelf: "center", height: 200, width: 200 }}
              source={{ uri: image }}
            /> */}

            <TextInput
              style={styles.input}
              placeholder="precio"
              value={precio.toString()}
              keyboardType="phone-pad"
              onChangeText={setPrecio}
            />

            <CustomButton
              text={existe === "si" ? "Actualizar" : "Agregar"}
              onPress={existe === "si" ? updateProduct : uploadImage}
            />
          </View>
        </SafeAreaView>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  contenido: {
    backgroundColor: "lightblue",
    flex: 1,
  },
  btnImagen: {
    backgroundColor: "#Fafa",
    marginHorizontal: 80,
    marginTop: 20,
    paddingVertical: 10,
    borderRadius: 40,
    marginBottom: 20,
  },
});

export default AddProductsScreen;
