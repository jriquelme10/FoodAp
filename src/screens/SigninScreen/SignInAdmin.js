import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
} from "react-native";
import React from "react";
import Logo from "../../../assets/images/logo.png";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigatioon = useNavigation();

  const onAdminPressed = () => {
    navigatioon.navigate("AgregarProducto");
  };
  const onClientPressed = () => {
    navigatioon.navigate("ClientTable");
  };

  const { height } = useWindowDimensions();
  return (
    <View style={styles.root}>
      <Image
        source={Logo}
        style={[styles.logo, { height: height * 0.3 }]}
        resizeMode="contain"
      />
      <Text style={styles.title}> administrador </Text>
      <CustomButton text="Agregar Producto" onPress={onAdminPressed} />
      <CustomButton text="Agregar Categoria" onPress={onClientPressed} />
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
  title: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "bold",
  },
});
export default HomeScreen;
