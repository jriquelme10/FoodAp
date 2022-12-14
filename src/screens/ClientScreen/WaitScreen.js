import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
  ActivityIndicator
} from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { CartContext } from "./CartContext";
import { URLBASE } from "../../../URL_API";

const WaitScreen = () => {
  const context = useContext(CartContext);
  const [status, setStatus] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    const interval = setInterval(() => {
      getOrden();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getOrden = async () => {
    try {
      const { data } = await axios.get(
        `${URLBASE}` + `/api/order/${context.idOrden}`
      );
      console.log(context.idOrden);
      if (data.status == "PREPARANDO PEDIDO") {
        navigation.navigate("CountDown", {
          minutes: data.minutes,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <Text style={[styles.title,{textAlign:"center"},{marginTop:"10%"}]}>Esperando confirmación del pedido...</Text>
      <ActivityIndicator style={{marginTop:"10%"}} size="large" color="#00ff00"/>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "bold",
  },
});
export default WaitScreen;
