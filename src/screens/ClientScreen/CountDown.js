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
        <Header title="Tiempo de espera" />
        <Timer
          isPlaying={isPlaying}
          key={key}
          duration={route.params.minutes}
        />
        <Button
          title="Pausar / Reanudar"
          onPress={() => setIsPlaying((prev) => !prev)}
        />
        <Button title="Reiniciar" onPress={() => setKey((prev) => prev + 1)} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 100,
    backgroundColor: "lightyellow",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CountDown;
