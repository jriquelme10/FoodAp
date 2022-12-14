import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Button,
  Text,
  StyleSheet,
  View,
  FlatList,
  Alert,
  TextInput,
} from "react-native";
import Header from "../../components/clientComponents/Timer/Header";
import Timer from "../../components/clientComponents/Timer/Timer";

const CountDown = ({ route }) => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [key, setKey] = React.useState(0);
  const [text, onChangeText] = React.useState("Useless Text");

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Text style={[styles.title,{marginBottom:"10%"}]}>TIEMPO DE ESPERA</Text>
        <Timer
          isPlaying={isPlaying}
          key={key}
          duration={route.params.minutes * 60}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 200,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "bold",
  },
});

export default CountDown;
