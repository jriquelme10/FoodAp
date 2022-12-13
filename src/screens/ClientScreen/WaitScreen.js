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
  const [minutes, setMinutes] = useState();
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
      setMinutes(data.minutes);
      if (data.status == "PREPARANDO PEDIDO") {
        console.log("minutos", minutes);
        navigation.navigate("CountDown", {
          minutes: minutes,
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
