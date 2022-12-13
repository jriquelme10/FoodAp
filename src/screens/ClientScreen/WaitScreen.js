import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
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
      <Text>Esperandooooooooooooooooooooooooozzzzzz</Text>
    </View>
  );
};

export default WaitScreen;
