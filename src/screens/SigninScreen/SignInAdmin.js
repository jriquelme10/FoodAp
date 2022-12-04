import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
  ScrollView
} from "react-native";
import React from "react";
import Logo from "../../../assets/images/logo.png";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigatioon = useNavigation();

  const onProductPressed = () => {
    navigatioon.navigate("AgregarProducto");
  };
  const onCategoryPressed = () => {
    navigatioon.navigate("AgregarCategoria");
  };
  const onTablePressed = () => {
    navigatioon.navigate("AgregarMesa");
  };
  
  

  const { height } = useWindowDimensions();
  return (
    <ScrollView>
    <View style={styles.root}>
      <Image
        source={Logo}
        style={[styles.logo, { height: height * 0.3 }]}
        resizeMode="contain"
      />
      <Text style={styles.title}> ADMINISTRADOR </Text> 

  
      <Text style={[styles.title,{marginTop:20}]}> Productos </Text>
      <CustomButton text="Agregar Producto" onPress={onProductPressed} />
      

      <Text style={[styles.title,{marginTop:20}]}> Categorías </Text>
     <CustomButton text="Agregar Categoria" onPress={onCategoryPressed} />
    

     <Text style={[styles.title,{marginTop:20}]}> Mesas </Text>
      <CustomButton text="Agregar Mesa" onPress={onTablePressed} />
      
      
      
    </View>

    </ScrollView>
    
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
