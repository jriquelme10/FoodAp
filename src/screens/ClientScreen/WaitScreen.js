import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
} from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

import { URLBASE } from "../../../URL_API";

const WaitScreen = () => {
  const [status, setStatus] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    const interval = setInterval(() => {
      getOrden();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const getOrden = async () => {
    try {
      const { data } = await axios.get(`${URLBASE}` + `/api/order/2`);
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
